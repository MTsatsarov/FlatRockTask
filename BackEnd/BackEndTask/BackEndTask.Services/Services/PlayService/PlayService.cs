using BackEndTask.Data;
using BackEndTask.Data.Models;
using BackEndTask.Services.InputModels;
using BackEndTask.Services.Services.QuizService;
using BackEndTask.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.Services.Services.PlayService
{
    public class PlayService : IplayService
    {
        private readonly ApplicationDbContext db;
        private readonly IQuizService quizService;

        public PlayService(ApplicationDbContext db, IQuizService quizService)
        {
            this.db = db;
            this.quizService = quizService;
        }

        public async Task<AnswerResponseViewModel> CheckAnswer(CheckAnswerInputModel model)
        {
            var quote = this.db.Quotes.FirstOrDefault(x => x.Id == model.QuoteId);
            var result = this.db.Results.FirstOrDefault(x => x.Id == model.ResultId);
            bool isCorrect = false;
            if (model.Type == "binary")
            {
                isCorrect = CheckForBinary(quote, model.Answer, model.UserAnswer);
            }
            else
            {
                isCorrect = CheckForMultiple(quote, model.UserAnswer);
            }
            var answerResult = new AnswerResult()
            {
                Quote = this.db.Quotes.First(x => x.Id == model.QuoteId).Title,
                Answer = model.Answer,
                UserAnswer = model.UserAnswer,
                IsCorrect = isCorrect
            };
            result.Answers.Add(answerResult);

            if (isCorrect)
            {
                result.CorrectAnswers += 1;
                this.db.Results.Update(result);
                await this.db.SaveChangesAsync();
            }

            var checkResult = new AnswerResponseViewModel()
            {
                IsCorrect = isCorrect,
                CorrectAnswer = quote.CorrectAnswer
            };
            return checkResult;
        }

        private bool CheckForMultiple(Quote quote, string userAnswer)
        {
            return quote.CorrectAnswer == userAnswer;
        }

        private bool CheckForBinary(Quote quote, string answer, string userAnswer)
        {
            if (quote.CorrectAnswer == answer)
            {
                if (userAnswer == "yes")
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                if (userAnswer == "no")
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }


        public async Task<StartQuizModel> StartQuiz(StartModel model)
        {
            var result = new Result()
            {
                QuizId = model.Id,
                UserId = model.UserId
            };

            await db.Results.AddAsync(result);
            await db.SaveChangesAsync();
            var resultId = this.db.Results.OrderByDescending(x => x.CreatedOn).Where(x => x.QuizId == model.Id && x.UserId == model.UserId).Select(x => x.Id).FirstOrDefault();
            var quiz = quizService.ById(model.Id);

            return new StartQuizModel() { ResultId = resultId, Quiz = quiz };
        }

        public async Task<double> GetResult(string id)
        {
            var result = this.db.Results.Where(x => x.Id == id).FirstOrDefault();
            double points = (double)((double)result.CorrectAnswers / (double)result.Quiz.Quotes.Count()) * 100;
            return Math.Round(points, 2);
        }

        public List<MyResultsViewModel> GetMyResults(string id)
        {
            var results = this.db.Results.Where(x => x.UserId == id).OrderByDescending(x => x.CreatedOn).ToList();

            var model = new List<MyResultsViewModel>();
            foreach (var result in results)
            {
                double points = (double)((double)result.CorrectAnswers / (double)result.Quiz.Quotes.Count()) * 100;

                var currentModel = new MyResultsViewModel()
                {
                    Quiz = result.Quiz.Title,
                    ResultId = result.Id
                };
                model.Add(currentModel);
            }

            return model;
        }

        public List<AnswerResultsViewModel>  GetAnswersPerResult(string resultId)
        {
            var result = db.Results.First(x => x.Id == resultId);
            return result.Answers.Select(x => new AnswerResultsViewModel()
            {
                Answer = x.Answer,
               Quote = x.Quote,
                UserAnswer = x.UserAnswer,
                IsCorrect = x.IsCorrect
            }).ToList();
        }
    }
}

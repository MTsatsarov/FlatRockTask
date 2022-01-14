using BackEndTask.Data;
using BackEndTask.Data.Models;
using BackEndTask.Services.InputModels;
using BackEndTask.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndTask.Services.Services.QuizService
{
    public class QuizService : IQuizService
    {
        private readonly ApplicationDbContext db;

        public QuizService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public QuizPlayModel ById(string id)
        {
            return this.db.Quizzes.Where(x => x.Id == id).Select(q => new QuizPlayModel
            {
                Title = q.Title,
                Id = id,
                Quotes = q.Quotes.Select(quote => new QuotePlayModel
                {
                    Id = quote.Id,
                    Title = quote.Title,
                    Answers = quote.Answers.Select(x => x.Title).ToList()
                }).ToList()
            }).FirstOrDefault();

        }

   
        public async Task Create(QuizInputModel model)
        {
            var quiz = new Quiz() { Title = model.Title, UserId = model.Creator };

            foreach (var quote in model.Quotes)
            {
                var currentQuote = new Quote() { Title = quote.Title, Answers = new List<Answer>(), CorrectAnswer = quote.CorrectAnswer };
                foreach (var answer in quote.Answers)
                {
                    var currentAnswer = new Answer() { Title = answer };
                    currentQuote.Answers.Add(currentAnswer);
                }
                quiz.Quotes.Add(currentQuote);
            }
            await this.db.Quizzes.AddAsync(quiz);
            await this.db.SaveChangesAsync();

        }

        public async Task Delete(string id)
        {
            var quiz = this.db.Quizzes.FirstOrDefault(x => x.Id == id);
            quiz.IsDeleted = true;
            this.db.Quizzes.Update(quiz);
            await db.SaveChangesAsync();
        }

        public List<QuizViewModel> GetAll()
        {
            var list = new List<QuizViewModel>();
            var dataResult = this.db.Quizzes.ToList();

            foreach (var data in dataResult)
            {
                var quiz = new QuizViewModel()
                {
                    Id = data.Id,
                    Title = data.Title,
                    QuoteCount = data.Quotes.Count(),
                    Creator = data.UserId
                };
                list.Add(quiz);
            }
            return list;
        }

        public QuizEditViewModel GetEditModel(string id)
        {
            var dataModel = this.db.Quizzes.Where(x => x.Id == id).Select(x => new QuizEditViewModel()
            {
                Id = x.Id,
                Title = x.Title,
                Quotes = x.Quotes.Select(q => new QuoteEditViewModel()
                {
                    Id=q.Id,
                    Title = q.Title,
                    CorrectAnswer=q.CorrectAnswer,
                    Answers= q.Answers.Select(a=> new AnswerEditViewModel()
                    {
                        Id=a.Id,
                        Title=a.Title
                    }).ToList()
                }).ToList()


            }).FirstOrDefault();
            return dataModel;

        }
    }
}

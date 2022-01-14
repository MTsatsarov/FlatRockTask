using BackEndTask.Services.InputModels;
using BackEndTask.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.Services.Services.PlayService
{
    public interface IplayService
    {
         Task<AnswerResponseViewModel> CheckAnswer(CheckAnswerInputModel model);
        Task<StartQuizModel> StartQuiz(StartModel model);
        Task<double> GetResult(string id);
        List<MyResultsViewModel> GetMyResults(string id);
        List<AnswerResultsViewModel> GetAnswersPerResult(string resultId);
    }
}

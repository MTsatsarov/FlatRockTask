using BackEndTask.Services.InputModels;
using BackEndTask.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackEndTask.Services.Services.QuizService
{
    public interface IQuizService
    {
        Task Create(QuizInputModel model);

        List<QuizViewModel> GetAll();
        QuizPlayModel ById(string id);
        QuizEditViewModel GetEditModel(string id);

        Task Delete(string id);
    }
}

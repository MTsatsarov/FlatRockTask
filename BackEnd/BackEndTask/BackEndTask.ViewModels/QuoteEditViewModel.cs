using System.Collections.Generic;

namespace BackEndTask.ViewModels
{
    public class QuoteEditViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }

        public ICollection<AnswerEditViewModel> Answers { get; set; }

        public string CorrectAnswer { get; set; }
    }
}
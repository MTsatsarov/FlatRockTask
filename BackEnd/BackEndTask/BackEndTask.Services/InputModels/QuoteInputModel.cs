using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackEndTask.Services.InputModels
{
    public class QuoteInputModel
    {
        public QuoteInputModel()
        {
            this.Answers = new List<string>();
        }
        [Required]
        public string Title { get; set; }

        public ICollection<string> Answers { get; set; }

        public string CorrectAnswer { get; set; }
    }
}
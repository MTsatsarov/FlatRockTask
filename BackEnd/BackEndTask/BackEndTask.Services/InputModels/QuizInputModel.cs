using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.Services.InputModels
{
   public class QuizInputModel
    {
        [Required]
        public string Title { get; set; }

        public ICollection<QuoteInputModel> Quotes { get; set; }
        public string Creator { get; set; }
    }
}

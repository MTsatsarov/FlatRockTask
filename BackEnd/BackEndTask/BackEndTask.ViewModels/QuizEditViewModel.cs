using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.ViewModels
{
   public class QuizEditViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }

        public ICollection<QuoteEditViewModel> Quotes { get; set; }
    }
}

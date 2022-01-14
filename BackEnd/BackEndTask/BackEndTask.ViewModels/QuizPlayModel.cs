using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.ViewModels
{
    public class QuizPlayModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public ICollection<QuotePlayModel> Quotes { get; set; }
    }
}

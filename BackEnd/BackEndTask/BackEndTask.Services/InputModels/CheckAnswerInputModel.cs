using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.Services.InputModels
{
    public class CheckAnswerInputModel
    {
        public string QuoteId { get; set; }
        public string Answer { get; set; }
        public string UserAnswer { get; set; }
        public string Type { get; set; }
        public string ResultId { get; set; }

    }
}

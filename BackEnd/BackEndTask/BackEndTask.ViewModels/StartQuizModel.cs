using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.ViewModels
{
   public class StartQuizModel
    {
        public string ResultId { get; set; }

        public QuizPlayModel Quiz { get; set; }
    }
}

using GameQuiz.Web.Data.Data.Common;
using System;

namespace BackEndTask.Data.Models
{
    public class AnswerResult:BaseDeletableModel<string>
    {
        public AnswerResult()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public string Quote { get; set; }
        public string Answer { get; set; }

        public string UserAnswer { get; set; }

        public bool IsCorrect { get; set; }

        public string ResultId { get; set; }

        public virtual Result Result { get; set; }
    }
}
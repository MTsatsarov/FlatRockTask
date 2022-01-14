using GameQuiz.Web.Data.Data.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.Data.Models
{
   public class Result:BaseDeletableModel<string>
    {
        public Result()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Answers = new HashSet<AnswerResult>();
        }

        public int CorrectAnswers { get; set; }

        [Required]
        public string QuizId { get; set; }
        public virtual Quiz Quiz { get; set; }
        [Required]
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

       public virtual ICollection<AnswerResult> Answers { get; set; }
    }
}

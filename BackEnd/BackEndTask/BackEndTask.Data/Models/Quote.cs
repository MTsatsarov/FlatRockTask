using GameQuiz.Web.Data.Data.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackEndTask.Data.Models
{
    public class Quote : BaseDeletableModel<string>
    {
        public Quote()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Answers = new HashSet<Answer>();
        }

        [Required]
        [MinLength(1)]
        public string Title { get; set; }

        [Required]
        public string QuizId { get; set; }
        public virtual Quiz Quiz { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }
        [Required]
        public string CorrectAnswer { get; set; }
    }
}
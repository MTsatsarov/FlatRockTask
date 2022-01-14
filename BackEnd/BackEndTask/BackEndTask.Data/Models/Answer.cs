using GameQuiz.Web.Data.Data.Common;
using System;
using System.ComponentModel.DataAnnotations;

namespace BackEndTask.Data.Models
{
    public class Answer:BaseDeletableModel<string>
    {
        public Answer()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        [MinLength(1)]
        public string Title { get; set; }


        [Required]
        public string QuoteId { get; set; }
        public virtual Quote Quote { get; set; }
    }
}
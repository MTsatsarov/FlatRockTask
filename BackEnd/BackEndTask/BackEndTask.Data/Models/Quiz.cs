using GameQuiz.Web.Data.Data.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.Data.Models
{
   public class Quiz:BaseDeletableModel<string>
    {
        public Quiz()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Quotes = new HashSet<Quote>();
            this.Results = new HashSet<Result>();
        }

        [Required]
        [MinLength(1)]
        public string Title{ get; set; }

        public virtual ICollection<Quote> Quotes { get; set; }
        public virtual ICollection<Result> Results { get; set; }

        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}

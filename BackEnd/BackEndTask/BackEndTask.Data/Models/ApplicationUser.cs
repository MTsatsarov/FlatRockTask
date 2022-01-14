using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace BackEndTask.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.Results= new HashSet<Result>();
            this.Quizzes = new HashSet<Quiz>();
        }
        public virtual ICollection<Quiz> Quizzes { get; set; }
        public virtual ICollection<Result> Results { get; set; }


    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEndTask.Services.InputModels
{
   public class StartModel
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string UserId { get; set; }
    }
}

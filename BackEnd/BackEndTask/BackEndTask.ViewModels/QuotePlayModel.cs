using System.Collections.Generic;

namespace BackEndTask.ViewModels
{
    public class QuotePlayModel
    {
        public string Id { get; set; }
        public string Title { get; set; }

        public ICollection<string> Answers { get; set; }
    }
}
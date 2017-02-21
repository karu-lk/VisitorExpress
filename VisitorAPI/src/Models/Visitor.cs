using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VisitorAPI.Models
{
    public class Visitor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long visitorId { get; set; }
        public string fullName { get; set; }
        public string company { get; set; }
        public string host { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OneClickSign.Data
{
    public class Submit
    {
        [Required]
        [Range(typeof(bool), "true", "true",
        ErrorMessage = "You have to agree to proceed.")]
        public bool HasAgreed { get; set; }
    }
}

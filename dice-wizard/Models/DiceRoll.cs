using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace dice_wizard.Models
{
    public class DiceRoll
    {
        [Key]
        public int Id { get; set; }
        public int Roll { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public int NumberOfSides { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;

namespace dice_wizard.Models
{
    public class DiceWizardDbContext : DbContext
    {
        public DiceWizardDbContext(DbContextOptions<DiceWizardDbContext> options): base(options)
        { }

        public DbSet<DiceRoll> DiceRoll { get; set; }
        public DbSet<NumberOfSides> NumberOfSides { get; set; }
    }
}

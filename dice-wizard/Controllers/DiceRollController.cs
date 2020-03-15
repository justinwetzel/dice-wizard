using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dice_wizard.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dice_wizard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiceRollController : ControllerBase
    {
        private readonly ILogger<DiceRollController> _logger;
        private readonly DiceWizardDbContext _dbContext;
        public DiceRollController(ILogger<DiceRollController> logger, DiceWizardDbContext dbContext)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpPost]
        public void Insert(DiceRoll roll)
        {
            _dbContext.DiceRoll.Add(roll);
            _dbContext.SaveChanges();
        }
    }
}
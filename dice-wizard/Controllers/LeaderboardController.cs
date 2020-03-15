
using dice_wizard.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace dice_wizard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaderboardController : ControllerBase
    {
        private readonly ILogger<LeaderboardController> _logger;
        private readonly DiceWizardDbContext _dbContext;

        public LeaderboardController(ILogger<LeaderboardController> logger, DiceWizardDbContext dbContext)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet]
        public List<DiceRoll> Get(int numberOfSides)
        {
            var result = _dbContext.DiceRoll
                .Where(x => x.CreatedDate.Date == DateTime.Now.Date)
                .Where(x => x.NumberOfSides == numberOfSides)
                .ToList();

            return result;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dice_wizard.Models;
using dice_wizard.Services;
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
        private readonly IThreadSafeRandomService _randomService;

        public DiceRollController(ILogger<DiceRollController> logger, DiceWizardDbContext dbContext, IThreadSafeRandomService randomService)
        {
            _dbContext = dbContext;
            _logger = logger;
            _randomService = randomService;
        }

        [HttpGet]
        public void Insert(int numberOfSidesId, string name)
        {
            var roll = new DiceRoll();
            roll.Name = name;
            roll.CreatedDate = DateTime.UtcNow;
            var numberOfSides = _dbContext.NumberOfSides.SingleOrDefault(x => x.Id == numberOfSidesId);
            if(numberOfSides == null)
            {
                return;
            }

            roll.NumberOfSides = numberOfSides.Value;
            roll.Roll = _randomService.Next(numberOfSides.Value);

            _dbContext.DiceRoll.Add(roll);
            _dbContext.SaveChanges();
        }
    }
}
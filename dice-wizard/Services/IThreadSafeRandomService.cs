using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dice_wizard.Services
{
    public interface IThreadSafeRandomService
    {
        public int Next(int numberOfSides);
    }
}

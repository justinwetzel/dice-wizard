using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dice_wizard.Services
{
    public class ThreadSafeRandomService : IThreadSafeRandomService
    {
        private static readonly Random _global = new Random();
        [ThreadStatic] private static Random _local;

        public int Next(int numberOfSides)
        {
            if (_local == null)
            {
                lock (_global)
                {
                    if (_local == null)
                    {
                        int seed = _global.Next();
                        _local = new Random(seed);
                    }
                }
            }

            return _local.Next(1, numberOfSides);
        }
    }
}

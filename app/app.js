(function ()
{
    'use strict';

    window.exercise1 = {
        areaOfTrapezoid: function (a, b, h)
        {
            if (a < 0 || b < 0 || h < 0 || typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
                return false;
            }
            return 0.5 * h * (a + b);
        }
    };
})();

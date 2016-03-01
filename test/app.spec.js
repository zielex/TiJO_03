describe('exercise1', function ()
{
    'use strict';

    var exercise1 = window.exercise1;

    describe('areaOfTrapezoid', function ()
    {
        describe('when "a","b" and "h" are non-negative numbers', function ()
        {
            it('should return area of trapezoid', function ()
            {
                expect(exercise1.areaOfTrapezoid(2, 2, 2)).toEqual(4);
                expect(exercise1.areaOfTrapezoid(1, 3, 6)).toEqual(12);
            });
        });

        describe('when "a", "b" or "h" is a negative number', function ()
        {
            it('should return false when "a" is a negative number', function ()
            {
                expect(exercise1.areaOfTrapezoid(-1, 3, 6)).toBe(false);
            });
            it('should return false when "b" is a negative number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, -3, 6)).toBe(false);
            });
            it('should return false when "h" is a negative number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, 3, -6)).toBe(false);
            });
        });

        describe('when "a", "b" or "h" is not a number', function ()
        {
            it('should return false when "a" is not a number', function ()
            {
                expect(exercise1.areaOfTrapezoid('text', 3, 6)).toBe(false);
            });
            it('should return false when "b" is not a number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, 'text', 6)).toBe(false);
            });
            it('should return false when "h" is not a number', function ()
            {
                expect(exercise1.areaOfTrapezoid(1, 3, 'text')).toBe(false);
            });
        });
    });
});

const inventory = require('../inventory')
const carYearOlder = require('../root/Problem5')
const carYear = require('../root/Problem4')

console.log(carYearOlder(inventory,carYear(inventory)))

describe('Problem5 Function', () => {
    it('should return year array with year less than 2000', () => {
        const result = carYearOlder(inventory,carYear(inventory))
        expect(result).toEqual(
            [
                1983, 1990, 1995, 1987, 1996,
                1997, 1999, 1987, 1995, 1994,
                1985, 1997, 1992, 1993, 1964,
                1999, 1991, 1997, 1992, 1998,
                1965, 1996, 1995, 1996, 1999
            ]
        );
    });
});
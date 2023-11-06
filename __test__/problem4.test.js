const inventory = require('../inventory')
const carYear = require('../root/Problem4')

console.log(carYear(inventory))

describe('Problem4 Function', () => {
    it('should return year array', () => {
        const result = carYear(inventory)
        expect(result).toEqual(
            [
                2009, 2001, 2010, 1983, 1990, 1995,
                2009, 1987, 1996, 2000, 2004, 2004,
                1997, 1999, 2000, 2001, 1987, 1995,
                1994, 1985, 2003, 1997, 1992, 2003,
                2005, 2005, 2000, 2005, 1993, 2010,
                1964, 1999, 2011, 1991, 2000, 2003,
                1997, 1992, 1998, 2012, 1965, 1996,
                2009, 2012, 2008, 1995, 2007, 2008,
                1996, 1999
              ]
        );
    });
});
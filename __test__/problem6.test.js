const inventory = require('../inventory')
const bmwAudiCars = require('../root/Problem6')

console.log(JSON.stringify(bmwAudiCars(inventory)))

describe('Problem6 Function', () => {
    it('should return car details of BMW and Audi', () => {
        const result = JSON.stringify(bmwAudiCars(inventory))
        expect(result).toEqual(
            '[{"id":6,"car_make":"Audi","car_model":"riolet","car_year":1995},{"id":8,"car_make":"Audi","car_model":"4000CS Quattro","car_year":1987},{"id":25,"car_make":"BMW","car_model":"525","car_year":2005},{"id":30,"car_make":"BMW","car_model":"6 Series","car_year":2010},{"id":44,"car_make":"Audi","car_model":"Q7","car_year":2012},{"id":45,"car_make":"Audi","car_model":"TT","car_year":2008}]'
        );
    });
});
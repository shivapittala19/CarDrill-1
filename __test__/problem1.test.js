const inventory = require('../inventory');
const carWithID = require('../root/Problem1');

console.log(carWithID(inventory))

describe('Problem1 Function', () => {
    it('should return car details when car with ID 33 is found', () => {
        const result = carWithID(inventory)
        expect(result).toEqual('CAR 33 is a 2011 Jeep Wrangler');
    });
});
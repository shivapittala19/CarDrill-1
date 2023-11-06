const inventory = require('../inventory')
const lastCar = require('../root/Problem2')

console.log(lastCar(inventory))

describe('Problem1 Function', () => {
    it('should return car details of last car', () => {
        const result = lastCar(inventory)
        expect(result).toEqual('Last car is a Lincoln Town Car');
    });
});
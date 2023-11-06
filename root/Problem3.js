const inventory = require('../inventory')

function Problem3(inventory){
    const carNames = []
    for(let i=0;i<inventory.length;i++){
        carNames.push(inventory[i].car_model.toLowerCase())
    }
    return carNames.sort()
}

module.exports = Problem3;
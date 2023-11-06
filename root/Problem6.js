const inventory = require('../inventory')

function Problem6(inventory){
    let bmwAudiCars = []
    for (let i=0;i<inventory.length;i++){
        if ((inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi')){
            bmwAudiCars.push(inventory[i])
        }
    }
    return bmwAudiCars
}

module.exports = Problem6;

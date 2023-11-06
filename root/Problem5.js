const inventory = require('../inventory')
const carYear = require('./Problem4')

function Problem5(inventory,carYear){
    const yearGreater = []
    for(let i=0;i<carYear.length;i++){
        if(carYear[i]<2000){
            yearGreater.push(carYear[i])
        }
    }
    return yearGreater
}

module.exports = Problem5;

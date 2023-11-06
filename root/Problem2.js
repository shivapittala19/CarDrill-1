function Problem2(inventory){
    let i = inventory.length-1
    const { car_year: year, car_make: make, car_model: model,id:id } = inventory[i];
    return `Last car is a ${make} ${model}`;
}

module.exports = Problem2;


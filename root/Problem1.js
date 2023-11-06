function Problem1(inventory){
    let i;
    for(i=0;i<inventory.length;i++){
        if (inventory[i].id==33){
            const { car_year: year, car_make: make, car_model: model,id:id } = inventory[i];
            return `CAR 33 is a ${year} ${make} ${model}`;
        }
    }
    return `CAR 33 is not found`
}
module.exports = Problem1;

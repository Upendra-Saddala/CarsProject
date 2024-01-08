function problem1(inventory=[],id=""){
    
    if (!Array.isArray(inventory) || (typeof id !=="number")||(inventory.length===0)){
        return []
    }else{
        for (let i=0;i<inventory.length;i++){
            if (inventory[i].id==33){
                return `car 33 is ${inventory[i].car_year} ${inventory[i].car_make}${inventory[i].car_model}`
            }
        }
        return []
    }
}
module.exports=problem1
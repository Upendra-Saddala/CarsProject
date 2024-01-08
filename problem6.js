module.exports=function problem6(inventory){
    console.log(invnetory);
    if (Array.isArray(inventory)){
        let result=[];
        for (let i=0;i<inventory.length;i++){
            if (inventory[i].car_make==="BMW" || inventory[i].car_make==="Audi"){
                result.push(inventory[i])
            }
        }
        return result;
    }else{
        return []
    }
}
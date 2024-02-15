module.exports=(a,b)=>{
    if(a===undefined||b===undefined){
        throw new Error("Numbers must be exist")
    }

    if(!Number.isInteger(a)||!Number.isInteger(b)){
        throw new Error("Numbers must be integer")
    }

    return(a**b);
}
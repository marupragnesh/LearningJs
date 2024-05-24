function printName(getName){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(getName);
            resolve(getName);
        }, 3000);
    })
}

async function getMyName(){
    await printName("pragnesh");
    await printName("krishna");
}


// here one time call function or use iife technique to call automatically

getMyName();






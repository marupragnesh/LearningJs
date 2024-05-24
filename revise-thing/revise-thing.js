function printName(getName){
    return new Promise((response,reject)=>{
        setTimeout(()=>{
            console.log(getName);
            response(getName);
        },2000);
    });
}

// const result =  async () => {
//     await printName("Pragnesh");
//     await printName("Arvindbhai");
//     await printName("Meenaben");
//     await printName("Jaymin");
// } 

// result();


printName("pragnesh").then((res)=>{
    console.log(res);
})
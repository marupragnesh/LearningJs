// promise is similar to callback

// let promise = new Promise((resolve,reject)=>{
//     console.log("Hello World");
// })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Operation completed successfully");
//     }, 1000); 
// });


function asycronous1(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(dataId)
            resolve("success");
        }, 3000);
    });
}

function asycronous2(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(dataId)
            reject("something wrong");
        }, 3000);
    });
}

    // asycronous1("fetching data1").then((res)=>{
    //     console.log(res);
    //     asycronous2("fetching data2").catch((err)=>{
    //     console.log(err);
    //     });
    // });

    // OR
    
    // asycronous1("pragnesh").then((resolve,reject)=>{
    //     console.log(resolve);
    //     return asycronous2("hacker")
    // })

    // .catch((reject)=>{
    //     console.log(reject);
    // });

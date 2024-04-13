
const a = {
    // likkyBucket(){
    //     console.log("this is myFunction");
    // }

    // tokenBucket : function() {
    //     console.log("this is yourName");
    //    }

     ratelimiting : () => {
        console.log("this is used for rate limiting - fake request")
    }
    
}

console.log(a.ratelimiting,"this is 3 ways define function in object ");

// abc(){
//     console.log("outside creating function");
// };

// if we dont write function before abc then it gives error
abc();

// when define call backfunction there are 2 ways 

setTimeout(() => {
    console.log("Hello")
},4000);

    // OR

setTimeout(function()   {
    console.log("Hello");
});


// here function and Function Both Are Different In JS.
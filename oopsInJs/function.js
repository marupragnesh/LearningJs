        function postman() {
        console.log("did you know postman we create variable of same url");
        }
        // OR
        const myArrowFunctionOutside = () => {
        console.log("This is an arrow function defined outside of an object");
        }; // generally we use this or above thing - and we dont define const then it okay but it becomes global

//

(() => {
  console.log("This is an immediately invoked arrow function");
})();

postman1(() => {
  console.log("also in postman have console, documents, collection, script");
}); // looks myArrowFunctionOutside and postman1 have some difference

//  postman1 (()=>{
//     console.log("also in postman have console, documents, collection ,script ");
//  })
const a = {
  // IMPORTANT WE PROVIDE ONE PATTERN IN THIS OBJECT

  // likkyBucket(){
  //     console.log("this is myFunction");
  // }

  // function likkyBucket(){
  //     console.log("this is myFunction");
  // }

  // tokenBucket : function() {
  //     console.log("this is yourName");
  //    }

  //  ratelimiting : () => {
  //     console.log("this is used for rate limiting - fake request")
  // }

  // callingPostman : postman;

  callingPostman: postman,
};
a.callingPostman();

// console.log(a.ratelimiting,"this is 3 ways define function in object ");

// abc(){    //INVALID FUNCTION OUTSIDE DEFINE - USE FUNTION KEYWORD
//     console.log("outside creating function");
// };

// if we dont write function before abc then it gives error
// abc();

// when define call backfunction there are 2 ways

// setTimeout(() => {
//     console.log("Hello")
// },4000);

//     // OR

// setTimeout(function()   {
//     console.log("Hello");
// });

// here function and Function Both Are Different In JS.

// Define a function that takes an arrow function as an argument
const greet = (callback) => {
  // Call the arrow function callback
  callback();
};

// Define a simple arrow function
const sayHello = () => {
  console.log("Hello!");
};

// Call the greet function and pass the sayHello function as an arrow function callback
greet(sayHello);

// OR
const greet1 = (callback) => {
  // Call the arrow function callback
  callback();
};

// Call the greet function and pass the sayHello function as an arrow function callback
greet1(() => {
  console.log("Hello!");
});

console.log("1");
console.log("2");
console.log("3");
settimeout("Hello",4000); // print after 4 second 

// above line is invalid why it is you tell me - answer : it need function paramter and you pass string.
console.log("4");
console.log("5");
console.log("6");



// settimeout contain function as argument .


settimeout(()=>{
console.log("when we use inheritance and constuctor present then must be use in child class super keyword");
},5000);


function superKeyWord(thisKeyword,HowToCreateObject){
    console.log(thisKeyword,HowToCreateObject);
}

function superKeyWord(){
    console.log("empty function execute with callBackHell");
}

function callSuperKeyWordFunction(CallingThis,CallingHow,CallBack){
    CallBack(CallingThis,CallingHow); // console.log(thisKeyword,HowToCreateObject); executes - paramter
    CallBack(); // empty function executes
}

callSuperKeyWordFunction("pragnesh","gitpush",superKeyWord);   
        // OR
        callSuperKeyWordFunction("pragnesh","gitpush", ()=>{
            console.log("Something extra pass this current string to callSuperKeyWordFunction but it not print because it contain 2 parameter only ");
        });   

// settimeout kya leta he it take function or also called as callback which is mostly type of function and execute asyncronously - and async means it always execute parallel 


function getData(dataId, getNextData){
    setTimeout("Hello",2000); //instead hellow we can pass arrow function also 
}




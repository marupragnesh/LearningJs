// let myname = "pragnesh"
// let addGmail = "@gamail.com"

// console.log(myname.concat(addGmail));


// let food = ["banana"," papya", "apple"];
// console.log(food.push("chiku"));

// console.log(food)
// food.pop("banana");
// console.log(food)


const aeiou = (takeName)=>
{
    let arr = [];
    for (let i of takeName)
    {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u" ) 
        {
             arr.push(i) 
        }
    }
    console.log(arr);
    return arr;
} 

aeiou("pragnesh")

// map is perform operation on all the member or values of array and return all the things

// let arrNumber = [1,3,4,5,6];
// arrNumber.forEach((val)=>{

//     console.log((val*val));
// });

// let newArray = arrNumber.map((val)=>{
//     return val/ 2 === 0;
// })

// console.log( newArray);

// filter is filtering the value means if match condition that value store in newarray other wise it gone

// reduce is return single output in array and takes multiple input value - it takes 2 param in callback.

// let arrMarks = [55,88,90,93,52,77];
// let output = arrMarks.filter((value)=>{
//     return value >= 90;
// });

// console.log(output);

// first initalize i ; that's why we can use i 


// below is nice program 

// let i = [];

// while (true) {
//     let arrNumber = parseInt(prompt("enter the number"));
//     if (arrNumber === 0) {
//         break;
//     }
//     i.push(arrNumber);
// }


// let sum = 0;
// let product = 1;
// i.reduce((prev, curr)=>
// {
//     sum = prev + curr;
//     return sum ;
    
// });

// console.log(sum);






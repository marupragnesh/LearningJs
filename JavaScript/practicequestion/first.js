console.log("pragnesh");

let Mychoise = 10;
let value = prompt("Hey ! user Enter The Number and Guess");

while(Mychoise != value)
{
    if(value == "0"){
    alert("bye User! nice to meet you ");
    break;
    }

    prompt("Haha ! Sorry but You Are Guess Wrong try Again ");
}

console.log("Congratulation User You Guess the Right Number");


 ------------------------- literal and string and it cant be directly replace ----------------

let printName = "pragnesh";
printName = "krishna";
printName = printName.replace("h","k")
let i = 1;
for(let name of printName)
{
    console.log(`My ${i} character in name is ${name}`);
    ++i;
}


------------------ array forof and forin ---------------


let name = "Pragnesh";
let arrHero = ["ironman", "hulk", "captain", "thor", 22,55,34,43];

// use forin for array and object 

for(let getHero in arrHero)
{
    
    console.log(`${arrHero[getHero]} is best of all times`);
}


for(let getHero of arrHero)
{
    
    console.log(`${getHero} is best of all times`);
}

for(let getstring in name)
{
console.log(`${name[getstring]}`)
}


practice program 

let studentMarks = [23,53,64,24,65,32]
let index = 0 ;
let totalsum = 0;
for (let val in studentMarks)
{
    totalsum = totalsum + studentMarks[val];
    index++;
}

console.log(`the masks of student is ${totalsum} `);
console.log(`average marks of this student is ${totalsum/studentMarks.length}`);


const profile = {
    name : "pragnesh",
    isfollow : true,
    about : "i am developer",
    mystatus : undefined,
    age : 23

};

console.log(profile.name.replace("pragnesh","krishna"));



 important create object of class or function and pass Paramter 
let name ;
let age;

function Person(name, age) {
    this.name = name;
    this.age = age;

    console.log(this.name);
    this.greet = function(x) {
        console.log(`Hello, my name is ${this.name}`);
        console.log(x);
    };
}
const person = new Person('John', 30);
const person1 = new Person('pragnesh', 30);
person.greet(10);
person1.greet(10);


const person = {
    age : 24,
     product : {
        pen : 20,
        mobile : 20000
    }
}

console.log(person.product.pen);

function foo() {
    var localVariable = 20;
    console.log(localVariable); // Output: 20
}

foo();

if (true) {
    let blockVariable = 30;
    console.log(blockVariable); // Output: 30
}

console.log(blockVariable); // ReferenceError: blockVariable is not defined

console.log(localVariable); // ReferenceError: localVariable is not defined


const printThings = {
    name: "pragnesh",
    age: 24
}

const { name1, age1 } = printThings;

console.log(name1); // Output: pragnesh
console.log(age1);  // Output: 24

let cartoon = "ben10";
console.log(typeof (cartoon));

const printThings = {
    name: "pragnesh",
    age: 24
}



console.log(name); // Output: pragnesh
console.log(age);  // Output: 24

console.log(printThings.name.replace("pragnesh","hello"));


const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(obj1 === obj2); // Shallow comparison
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // Deep comparison


const person = { name: 'John', age: 30 };
const jsonString = JSON.stringify(person);
console.log(jsonString);

const parsedObject = JSON.parse(jsonStrixng);
console.log(parsedObject);

const arrowSum = (val1, val2) => {
    return val1 + val2;
}

 arrowSum(4,2);
 
 console.log(a);

const answer = (vowels) =>
{
    let store ;
    for (let i of vowels)
    {
        if (vowels === "a" || vowels === "e" ||vowels === "i" ||vowels === "o" ||vowels === "u" )
        {
            store = i;
            break;
        }
    }
    return store;
}

let vowels1 = answer("pragnesh");
console.log(vowels1);

for(let j of vowels1 )
{
    console.log(`you vowel are in this string ${j}`);
}


const answer = (vowels) => {
    let store ; let x = 0;
    for (let i of vowels) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u" ) {
            store[x] = i;
            x++;
        }
    }
    return store;
}

let vowels1 = answer("pragnesh");
console.log(vowels1); // Output: a


const answer = (vowels) => {
    let store = [];
    for (let i of vowels) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u" ) {
            store.push(i);
        }
    }
    return store;
}

let vowels1 = answer("pragnesh");
console.log(vowels1); // Output: ['a', 'e']


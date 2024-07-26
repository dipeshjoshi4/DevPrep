/**
 * variable declaration
 * how js run the code -> dynamically typed language
 * */

// console.log("Inside intro");
// varaible declaration -> varname is a varibale
// that currently holds undefined
// let varName;

//! default value of a variable is undefined
// console.log("6",varName);

//!js -> numeric values
// varName=10;
// console.log("9",varName);
// varName=10.1;
// console.log("11",varName);


//! in js we have only strings
// let newVar;
// newVar="I am a string";
// console.log("22",newVar);


//! boolean 
// newVar=true;
// console.log("27",newVar);

//! null[user-defined], undefined(non-existence)[js]
// newVar=null;
// console.log(newVar);

/*****
 
 * how to know the current type of a value that a  variable is having There only numbers/strings What types of values it can have
  * Primitive -> 
       ->number , strings, booleans, null ,undefined
       ->bigInt, symbols
  * Non-primitive-> 
        -> functions , arrays and objects
 ****/

// varName=10;
// varName=false
// varName=10.1;
// varName="hello";
// console.log(5/2);
// varName='h'
// console.log(typeof varName);
// console.log("41",varName)


/! conditional -> if else and switch cases */

// let number = 11;
// if (number % 2 == 0) {
//     console.log("I am even");
// }
//  else {
//     console.log("I am odd");
// }

//? if there are lot of if elses -> switch case 

//? if elses

// let day = "saturday"
// if (day == "mon") {
//      console.log("working");
// }
// else if (day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
//      console.log("today is an off")
// }
// else if (day == "saturday" || day == "sunday") {
//      console.log("weekend");
// }
// else {
//      console.log("invalid day");
// }

//?switch case 

// let day = "monday"
// switch (day) {
//      case "monday":
//           console.log("holiday");
//           break;

//      case "tuesday":
//      case "wednesday":
//      case "thursday":
//      case "friday":
//           console.log("Working");
//           break;

//      case "saturday":
//      case "sunday":
//           console.log("weekend");
//           break;

//      default:
//           console.log("invalid day");
// }




//! loops : -> while , for loop , do while, for each 

// for(let num=1;num<=10;num++){
//     console.log("number is ", num);
// }

//! functions -> resuable block of code create

// console.log("Hello");

// function fn() {
//     console.log(" I am a function");
// }

// console.log("hello again");

// fn(); //function call/invoked

// function fn(a, b) {
//      console.log("a", a);
//      console.log("b", b);
//      let d = a + b;
//      return d;
// }

// fn("Hello ", "World");  //a Hello b WOrld

// let result = fn(10, 20);
// console.log("result", result);


//! strings : how strings work in js 
//! concatenation: appending a value to staring

// let string1 = "I am string";
// let string2 = 'I am string';
// let templateString = `I am also string but can be multiple line`
// console.log(string1);
// console.log(string2);
// console.log(templateString);


//! function example of strings

// function greet(firstNameVar) {
//      console.log("Hi " + firstNameVar + "!")
//      console.log('Hi ' + firstNameVar + '!');
//      console.log(`Hi ${firstNameVar}!`);
// }
// let firstName = "dipesh";
// greet(firstName)



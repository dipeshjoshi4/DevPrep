// console.log("Hi functions");


//! function -> function statement
// function fn(a) {
//     console.log("i am a fn", a);
//     return 10;
// }
// const returnVal=fn("hello");
// console.log("returnVal", returnVal);

//! Example-1
// function fn(a) {
//     console.log("i am function", a);
//     return 10;
// }
// const rval = fn("hello");                //?when you function call in variable you get return statement
// const anotherVar = fn;                   //? function adress store in anothervar

// console.log("ReturnValue", rval);        //? when you function call in variable you get return statement //10
// console.log("AnotherValue", anotherVar); //? function body print(function reference) //fn{}
// const ans = anotherVar("something");     //? function call => output -> something //i am function something
// console.log(ans);                        //? 10 //? for return value always store function call in any variable
// fn("someone");                           //? function call => output -> something //i am function someone


//! function expression -> while using this your bug not come
// const refFunction = function (helloParam) {
//     console.log("Hello i am function");
// }
// refFunction("hello");


//! function -> arrow function
//? const arrow = () => {}
// const arrowFn = (Parameter) => {
//     console.log("Hello I am arrow function", Parameter);
// }
// arrowFn("hello");

//! IIFE -> immediatley invoked function expression
// (function(a){
//     console.log("I am an IIFE",a);
// })
// f("hello");





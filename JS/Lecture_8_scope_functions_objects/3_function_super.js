//!  function has two parts  
// 1) fn defintion 
// 2) fn invocation/call

//! fn defenition
// function fn() {
//     console.log("Hello");
// }

//! fn invocation -> code inside that fn is execute 
// fn();


//!variables -> assign -> reference type value -> referese assign , value -> value assign
// let arr = [10, 20, 30];
// let arr2 = arr;
// let a = 10;
// let b = a;


//! variables -> can be passed as a parameter to a function
// let arr = [10, 20, 30];
// let arr2 = arr;

// function fn(params) {
//     console.log("Hello Params", params);
// }
// fn(10); //?10
// fn("Hello"); //?Hello
// fn(arr2); //? refernce and get answer array


//? FUNCTION SUPERPOWER

//! You can treat a function as a variable
// function fn() {
//     console.log("Hello");
// }

//! fn invocation -> code inside that fn is execute 
// fn(); //? called

//! access
// console.log(fn); //?function print body print



//! you have a variable(arr) and you stored reference type variable(arr) value then adress pass and get the value
// let arr = [10, 20, 30];
// let arr2 = arr;

//? access both way
// console.log("arr",arr)
// console.log("arr2",arr2)


// !this kind of called "function expression" 
// const refFunction = function () {
//     console.log("Hello i am function");
// }
// const newFNVar=refFunction; //? both have same adresss

//? access both way 
// newFNVar();
// console.log("`````````````````");
// refFunction();

//! because of above example you can solve major problem in ling code database like this

//! 1st kind of function ====> if like this in function
// function real () {
//     console.log("I am real. Always run me");
// }

// function real () {
//     console.log("No I am real one ");
// }

// function real () {
//     console.log("You both are wasted");
// }

// real() //? last one will work dont get error


//! 2nd kind of function ====> what if it like this

// let real=function () {
//     console.log("I am real. Always run me");
// }

// let real=function () {
//     console.log("No I am real one ");
// }

// let real=function () {
//     console.log("You both are wasted");
// }

// real(); //? get ERROR ->  identifier 'real' is already been  decleared


//! you can pass function too in function parameter


function bigger(paramFN) {
    console.log("Inside bigger")
    paramFN();
}
function smaller() {
    console.log("I am smaller");
}
bigger(smaller)

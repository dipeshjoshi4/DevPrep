//! t.s. => Intution Of Async JS
console.log("sync_Async"); 

//! Question-1 Synchronous : the code that is executed line by line

// console.log("Before");
// function fn() {
//     console.log("I am fn");
// }
// fn();
// console.log("After");

//! Question-2 
//!Asynchronous code:a part of code is executed first and another a section of code is delayed and that part executed later one

//?1
console.log("Before");
setTimeout(fn, 3000);

//?2
function fn() {
    console.log("I am fn");
}

//?3
console.log("After");

//? setTimeout is an async function. who executed that specific code with specific mention time.which is delayed
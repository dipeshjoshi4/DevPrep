
//! TIMESTAMP :01:23:00

// code execution -> high level overview
// let a=10;
// console.log(a);
// function fn() {
//     console.log("I am fn");
//     function inner() {
//         console.log("I am inner");
//     }
//     console.log("I am fn 2")
//     inner();
//     console.log("I am fn 3")
// }
// fn();
// console.log(a);


/****
 
  1. all the code is executed on call stack and inside a execution context
  
  2. An execution context created when(that every box)
   a. a function is called 
   b. code execution starte for global code -> global execution context
 
 3. Execution context -> it excutes in two phases
      
         a.) memory allocation -> hositing
             i.) variable -> undefined
             ii.) function -> memory allocation in the heap
             ii.) window, 
            iii.) this, 
             iv.)  outer scope

       b.) code execution 
 * ***/


// let a; 
// console.log(a); //? its say ->  undefined while memeory execution context
// a = 10;
// console.log(a);
// fn()
// function fn() {
//     console.log("Hello");
// }
// fn();  
//? OUTPUT -> UNDEFINED , 10, hello , hello
//? if you write function in start or end it will work perfect because . they all access allocated memory at memory allocation phase

// function real() {
//     console.log("I am real. Always run me");
// }

// function real() {
//     console.log("No I am real one ");
// }

// function real() {
//     console.log("You both are wasted");
// }
// real();

// console.log(window.confirm("Hello"));






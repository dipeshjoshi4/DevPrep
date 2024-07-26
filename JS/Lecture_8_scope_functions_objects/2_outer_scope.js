

/***
 * EC : 
 * a.creation 
 *  1.    global code
 *              -> access to it's own variable and function 
 *                  -> Hositing 
 *                          var -> undefined 
 *                          function -> memory 
 *      function code 
 *                  -> access to it's own variable and function 
 *                  -> Hositing 
 *                          var -> undefined 
 *                          function -> memory 
 *              -> window object
 *              
 * 
 *  2. If there is no variable  present  that i want to access in the current function scope then outer scope 
 * b.) execute
 * 
 * */

//! Example-1
// let a = 10;
// console.log("value of a in global", a); //?10

// function outer() {
//     console.log("value of a in outer", a); //?10
//     function inner() {
//         let a = 20;
//         console.log("value of a in inner", a); //?20
//     }
//     inner();
// }
// outer();

// console.log("value of a in global", a); //?10


/**
 * outer variable and functions -> outer scope
 * this outer scope is defined by function defintion-> js the outer is lexically scoped
 * 
**/

//! example-2

// let varName = 10;
// //?  function definition
// function a() {
//     console.log("inside ", varName); //?10
// }
// function b() {
//     let varName = 20;
//     console.log("value of varName in b", varName); //?20
//     //?   function call
//     a();
//     console.log("value of varName in b again", varName);//? 20
// }
// b();

//? always takes your "function defination" outer scope variable if function dont have its own variable


//! Example-2.01

// let varName = 10;

// function b() {
//     let varName = 20;
//     console.log("value of varName in b", varName); //?20

//     //?  function definition
//     function a() {
//         console.log("inside ", varName); //?20
//     }

//     //?   function call
//     a();

//     console.log("value of varName in b again", varName);//? 20
// }
// b();

//? always takes your "function defination" outer scope variable if function dont have its own variable
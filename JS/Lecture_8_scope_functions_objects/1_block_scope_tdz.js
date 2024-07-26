console.log("JS_3_Part_1_Block_Scope");

//! variable scope

//! Example-1
// let a = 10;
// console.log("console 1", a);
// function fn() {
//     let a = 20;
//     console.log("console 2", a);
//     a++;
//     console.log("console 3", a);
// }
// fn();
// console.log("console 4", a);


// !let -> block scoped
//! what is block -> anything between two curly braces
//! function, loop , conditionls

//! Example-2
// let a=10
// console.log(a)
// if (true) {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);

//! Example-3
// let a = 10;
// console.log("console 1", a); //10
// function fn() {
//    let a = 20;
//     console.log("console 2 ", a); //20
//     a++;
//     console.log("console 3", a); //21
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("console 4 ", a); //31
//     }
//     console.log("console 5", a); //21
// }
// fn();
// console.log("console 6", a); //10

//! temporary dead zone
// every let declared varaiable is dead -> temporal dead zone
// where you can't access it's value
// thats temporary dead zone

//! Example
// console.log("after",varName);
// let varName;
// console.log("after",varName);
// varName=10;
// console.log(varName);







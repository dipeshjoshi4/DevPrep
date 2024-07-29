
//! actual class -> after t.s. -> 34:00 minute

//! Environment and js 

// - js i install in environment . browser install js get with that . in backend nodejs installed js is get with that
// - simillarrly js is just give logic other then all feture provided by the environment within your js is work
// - like React,ReactNative,Electron,Browser,Node

//! What is JS doing then --> Rule of thumb 
//1. JS : logic
//2. Enviornment : features

//! Some Environment Will Use
//? console.log-> browser
//? setTimout -> browser
//? document -> browser
//?  window -> browser

//! thats Why
//? Mobile Application -> React Native -> JS
//? Frontend -> Browser -> JS
//? Backend -> Nodejs -> JS
//? Desktop App-> Electron -> JS

//! why people go from c/c++  to java a to js ?
//? - c/c++ -> Java(there are no pointer)(memory allocation khud nahi karni padti)(kahi se bhi kuch bhi variable access nahi kar sakti)
//? - java -> JS (no multithreading)(multifunction work withour dependet on other function)


//! How it work ?
// 1. Every line of code that you wrote in your js file -> will only execute in call stack  
// 2. For a cb coming from WebAPIS to execute -> callstack should be empty
// 3. callback queue :As soon as task of asynchronous function is done there cb is immediatley enqueued in that queue
// 4. event loop : checks the queue and as soon as a cb arrived in the queue it continously 
//  check if callstack is empty or not and pushed that cb in callStack .


//!Example-1

// let a = true;
// console.log("Before");
// function fn() {
//     a = false;
//     console.log("I broke the while loop");
// }
// setTimeout(fn, 2000);
// console.log("After");
// let CurrentPlus6sec = Date.now() + 6000; //?Date.now() => from 1970 to now seconds + 6 second extra
// while (Date.now() < CurrentPlus6sec) {  }



//! Example-2 [t.s-01:09]

// console.log("Before");

// function a() {
//     console.log("I am a");
// }

// function b() {
//     console.log("I am b");
// }

// setTimeout(a, 0);
// console.log("After st 1 sec call")

// setTimeout(a, 1000);
// console.log("After st 0sec call")

// setTimeout(b, 2000);
// console.log("After st 2 sec call")

// console.log("After");

//? answer
/*
before
After st 0sec call
After st 1 sec call
after st 2 sec call
after
i am a
i am a
i am b


*/
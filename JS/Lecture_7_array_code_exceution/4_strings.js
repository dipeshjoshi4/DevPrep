
// let text = "Hello, World!";

// console.log("length",text.length); //? Output:length: 13

// console.log(text.toUpperCase());   //? Output: HELLO, WORLD!

// console.log(text.toLowerCase());  //? Output: hello, world!

// console.log(text.indexOf("W"));   //? Output: 7

// console.log(text.indexOf("world"));  //? Output: -1 //?coudnt find

// console.log(text.indexOf("World"));  //? Output: 7 // right spelling -> case sensitive

// console.log(text.includes("Hello")) //? Output: true

// console.log(text.includes("hello")) //? Output: false

//? this is kind of splice
// let subText = text.substring(0, 5);
// console.log(subText); 
//? Output: Hello //? till lastindex-1 (mean shere o to 4 )


//! there are some other funtions as well.
//! The`split()` method splits a string into an array of substrings based on a specified separator.

// let text = "Hello, World!";
// let words = text.split(" ");
// console.log(words); //? Output: ["Hello,", "World!"] //? give string to array form answer 

// let word = ["Hello,", "World!"];
// let joinedStrings = word.join("_");
// console.log(joinedStrings); //? Output: Hello,_World! //? give array to string form answer

// let text1 = "      Hello World!     ";
// console.log(text1);
// let text2 = text1.trim();
// console.log(text2); //? prefix and postfix space gone due to trim


//let message = "HELLO WORLD";
// let char = message.charAt(0);
// console.log(char); //? Output: H
// let ascii = message.charCodeAt(0);
// console.log(ascii); //? Output: 72

// let text = "Hello, World!";
// let newText = text.replace("World", "JavaScript");
// console.log(newText); //? Output: Hello, JavaScript!
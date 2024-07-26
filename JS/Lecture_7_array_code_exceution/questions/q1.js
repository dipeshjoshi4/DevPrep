// Write a JavaScript function called `advancedManipulation` that performs the following operations on an array of strings:

//! 1. Insert the string `"new"` at the second position in the array.
//! 2. Remove the third element from the array.
//! 3. Join all elements of the array into a single string, separated by a comma.


function advancedManipulation() {

    let words = ["apple", "banana", "cherry", "date"];


    let firstWord = words.shift("apple");
    words.unshift("new");
    words.unshift(firstWord);
    // console.log(words); //apple,new,banana,cherry,date


    words.splice(2, 1)
    // console.log(words); //apple,new,cherry,date

    let joinedStr = words.join(",")
    console.log(joinedStr)
}

advancedManipulation();
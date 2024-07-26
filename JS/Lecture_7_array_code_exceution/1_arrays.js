console.log("JS class -2");

/******
 * Arrays 
 * * array don't have a strict size 
 * -> add , remove elements from it 
 * 
 * 
 * ***/

// print Array
// let arr = [1, 2, 3, 4]
// let arr2 = [];
// console.log(arr2);
// console.log("arr",arr);

// Iterate an Array
// let arr = [1, 2, 3, 4]
// for (let i = 0; i < arr.length; i++) {
//     console.log("index: ", i, "value: ", arr[i]);
// }

/**************Important methods
 * 1. add last -> push
 * 2. remove last -> pop
 * 3. add first -> unshift
 * 4. remove first -> shift
 * ***************/
// 1. push() - add element at the end of the array
// let arr = [1, 2, 3, 4]
// arr.push(50);
// console.log("after push", arr); //=> after push [1,2,3,4,50]

//2 .pop() - remove element from the end of the array
// let arr = [1, 2, 3, 4,50]
// arr.pop();
// console.log("after pop", arr); //=> after pop [1,2,3,4]

// 3. unshift() - add element at the start of the array
// let arr = [1, 2, 3, 4]
// arr.unshift(5);
// console.log("after unshift", arr);//=> after unshift [5,1,2,3,4]

// 4. shift() - remove element from the start of the array
// let arr = [5,1, 2, 3, 4]
// arr.shift();
// console.log("after shift", arr); //after shift => [1,2,3,4]


//5. slice -  input->  start index  , end index 
// slice a copy the array from  sidx to edix - 1

// let arr = [5, 1, 2, 3, 4, 50]
// let slicedArr = arr.slice(1, 5);
// console.log("sliced Arr", slicedArr); //sliced arr =>[1,2,3,4]
// console.log("original arr", arr); //original arra => [5,1,2,3,4,50]

//6. splice-> input -> start index , from to start index how many element del is => delete count 
// splice original array me se element remove kr deta h 

// let arr = [5, 1, 2, 3, 4, 50]
// const spliedArray = arr.splice(2, 2);
// console.log("removed elements", spliedArray); //removed elements => [2,3]
// console.log("after splice", arr); //after splice => [5,1,4,50]

//slice => original array not chnage
//splice => it will chnage in original array | remove from original array

//7. indexOf - find the index of the element in the array
// let arr = [5, 1, 2, 3, 4, 50]
// console.log("index of 5", arr.indexOf(5)); //0
// console.log("index of 50", arr.indexOf(50)); //5
// console.log("index of 30", arr.indexOf(30)); //not in array so -1
// console.log("index of 80", arr.indexOf(80)); //not in array so -1

//8. includes
// let arr = [5, 1, 2, 3, 4, 50]
// console.log("is element present", arr.includes(10)); //false
// console.log("is element present", arr.includes(4)); //true

//9. join - join the array elements with the specified separator
// let fruits = ["apple", "oranges", "banana"];
// let str = fruits.join("_");
// console.log("string:", str);

// function advancedManipulation(words) {
// let firstWord = words.shift();
// words.unshift("new");
// words.unshift(firstWord);
// remove
// words.splice(2, 1);

// join
// let joinedStr = words.join(",");
// return joinedStr
// }

// let words = ["apple", "banana", "cherry", "date"];
// let result = advancedManipulation(words);
// console.log(result);
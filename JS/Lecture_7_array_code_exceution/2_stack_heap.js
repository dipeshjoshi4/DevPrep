// console.log("stack and heap");

//?  value types -> ram (stack)
// let a = 10;
// let str = "hello";
// let flag = true;

//? reference type  -> harddisk(heap)
//? arrays
 // let arr = [10, 20, 30]

//? function 
// function fn() {
//     console.log("I am function");
// }


//in stack-> value types are there after 
//in heap -> array and function will be stored at some loacation

// but variable will be stored in stack so when we want array first comes to stack and then goes to heap



// values change 
// let a = 10;
// a = 20;
// let str = "hello";
// str = "Hi";
// console.log(a, str);

// let arr=[10,20,30];
// let arr2=[30,40,50];
// arr=arr2;
// console.log(arr);

// - if we make digaram let arr and arr2 then
// - we assume arr adress is 2k positions
// - we assume arr2 adress is 3k positions
// - if now we see arr= arr2 then the stack chnage address from 2k to arr2 adress  which is 3k 

// const varName=20;
// varName=100;
//js is intermediate language .because when the code break show only that line error not after that
//intermediate type language is js .jaha tak code sahi whole code is running till that


// const str="hello";
// str="hi";

// const arr = [10, 20, 30];
// const arr2 = [30, 40, 50];
// arr = arr2;
// console.log(arr);

// const arr=[10,20,30];
// arr.push(100);
// console.log("arr", arr); //10,20,30,100 => value(which is in heap) can chnage address cant chnage




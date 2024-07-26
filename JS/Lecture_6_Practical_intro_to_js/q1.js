let a;
console.log("1. Initial value of a:", a);  // undefined

a = 15;
let b = a / 2;
console.log("2. Value of b after dividing a by 2:", b);  // 7.5

b = b - 4.5;
console.log("3. Value of b after subtracting 4.5:", b);  // 3

let c = b * 2;
console.log("4. Value of c after multiplying b by 2:", c);  // 6

let d = c / 3;
console.log("5. Value of d after dividing c by 3:", d);  // 2

let e = undefined;
console.log("6. Initial value of e:", e);  //  null

e = e + 5;
// e = undefined + 5;
console.log("7. Value of e after adding 5:", e);  // NaN - 

//the thing which have not a string or number so its null and null or undefined + anything is NaN

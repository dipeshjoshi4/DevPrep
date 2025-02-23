//! non primitive => functions, arrays, objects

//? empty
// let obj = {}

//? key add 
// obj.name = "Jasbir";
// obj.age = 28;

//? update
// obj.age = 25;

//? print
// console.log(obj);

//! object = key : value
//! key : string , number
//! values -> any valid js type 

//! values -> properties
//! functions -> methods 

let cap = {
    firstName: "Steve",
    lastName: "Rogers",
    movies: ["First Avenger", "Winter Soldier", "Civil War"],
    address: {
        state: "Newyork",
        district: "Manhatten"
    },
    isAvenger: true,
    age: 35,
    sayHi: function () {
        console.log("cap say's hi");
    }
}

//? print 
// console.log("cap", cap);

// ?get
// console.log("firstName", cap.firstName);
// console.log("second movie:",cap.movies[1]);
// console.log("state",cap.address.state);
// cap.sayHi();

//? update or set
// cap.friends=["Tony","Peter", "Bruce"];
// cap.isAvenger=false;
// console.log("====================")

//? delete -> people do not do in production level application -> because its low
// delete cap.movies;
// console.log("cap", cap);

//? loop 
for(let key in cap){
    console.log("key :", key ,"value ", cap[key]);
}

//? here in key print its key is treated as value
//? here in cap is treated as cap.key its will find key word so we have to write cap[key]
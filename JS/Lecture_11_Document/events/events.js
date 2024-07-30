

//! select the button or element
const button = document.querySelector("button");
const buttonRed = document.querySelector(".makeRed");
const box = document.querySelector(".box");
const chnageButton = document.querySelector(".forChange")


//! For the Working----------------------------------------------------------------------

//! not ideal way just to check
// button.onclick=function(){
//     alert("Button was clicked");
// }

//! for the first  button click event
// button.addEventListener("click", function () {
//     alert(" First Button Was Clicked")
// })

//! Button for the Working----------------------------------------------------------------

//! make it red
// buttonRed.addEventListener("click", function () {
//         box.style.backgroundColor = "red";
// })

//! Another good Exampel of chnage the color
// buttonRed.addEventListener("click", function () {
//     if (box.style.backgroundColor === "lightgreen") {
//         box.style.backgroundColor = "red";
//     } else {
//         box.style.backgroundColor = "lightgreen";
//     }
// })


//! Button as per click
// let create = document.createElement("p")
// const colors = ["blue", "lightgreen", "cyan", "gray", "red"]
// let i = 0;
// chnageButton.addEventListener("click", function () {
//     i = i % colors.length;
//     box.style.backgroundColor = colors[i],
//     box.style.color = "white",
//     create.innerText = i;
//     create.style.fontSize = "50px",
//     box.appendChild(create)
//     i++;
// }
// )


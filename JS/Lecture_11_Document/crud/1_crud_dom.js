
//! read the content of p tag
//! 1. select the element

//!Gives the childrean of document
// console.log(document.children)

//! gives the html .because document have on childrean which is <HTML>
// const html = document.children[0];
// console.log(html);

//! gives the html childrean which head and body and body have arry of index 1 so it gives body
// const body = html.children[1];
// console.log(body)

//! this bodys all the element get by attribute called body.innerHTML
// console.log("innerHTML", body.innerHTML);

//? by doing above command we can get all the tag but its not efficient in big code base 
//? so we get some specific command for our use

//! querySelector -> selector -> gives first matching element return

//! here innerHTML means all the html element in body 
// const body = document.querySelector("body");
// console.log(body.innerHTML); 

//! here textContent means all the text content in <p> 
// const pTag = document.querySelector("p");
// console.log("content inside p:", pTag.textContent); 

//! for all same name tag is queryselectorallP[we have 2 p tag so...for second array index 1.]
// const ptagArray = document.querySelectorAll("p");
// const textData = ptagArray[1].innerText;
// console.log("2nd p tag : ", textData);

//! class
// const classPtag=document.querySelector(".first");
// console.log("first : ",classPtag.textContent);

//! id
// const idPTag = document.querySelector("#unique");
// console.log(idPTag.textContent);

//! read 
// const idPTag = document.querySelector("#unique");
// console.log("second", idPTag.textContent);
// console.log("second",idPTag.innerText);

// console.log("=====================")

// const body = document.querySelector("body");
// console.log(body.innerHTML);

// console.log("==========================")

// console.log("innnerText ->",body.innerText);
// console.log("text content->",body.textContent);


//! update  -> property
// const idPTag = document.querySelector("#unique");
// idPTag.textContent = "I was update  by js"

//! styling  

//! give all the style list in html
// const idPTag = document.querySelector("#unique");
// console.log(idPTag.style) 

// const idPTag = document.querySelector("#unique");
// idPTag.style.backgroundColor = "blue";
// idPTag.style.color = "white";

//! you can find idname,classname,element with this
// const idName = idPTag.getAttribute("id");
// console.log("idValue", idName)

//! delete 
// const idPTag = document.querySelector("#unique");
// idPTag.remove();

//!creation
// const liElem=document.createElement("li"); 

//! add text , styling or properties
// liElem.innerText="I am a task";

//! select there parent
// const ulArr=document.querySelectorAll(".list");

//! append to that 
// ulArr[1].appendChild(liElem);






















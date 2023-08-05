// DOM Selection
// document.getElementById()
// document.getElementByTagName()
// document.getElementByClassName()

// 1. document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const firstP = document.querySelector("p");
firstP.innerHTML = "-- Ini diubah melalui javascript";

// 2. document.querySelectorAll() -> nodeList
const allP = document.querySelectorAll("p");
for (let i = 0; i < allP.length; i++) {
    allP[i].style.backgroundColor = "lightblue";
}

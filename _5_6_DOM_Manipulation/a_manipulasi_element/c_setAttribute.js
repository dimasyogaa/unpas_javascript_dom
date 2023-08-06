// setAttribute
const judul = document.getElementsByTagName("h1")[0];

judul.setAttribute("name", "yoga");

const a = document.querySelector("section#a a");
a.setAttribute("href", "https://github.com/Yogadimas");

// getAttribute
console.log(a.getAttribute("href"));

// removeAttribute
// a.removeAttribute("href");
// console.log(a.getAttribute("href"));

// mengganti kelas
const p2 = document.querySelector(".p2");
p2.setAttribute("class", "label");

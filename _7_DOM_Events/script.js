// Event Handler
const p3 = document.querySelector(".p3");

function ubahWarna() {
  p3.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarna; // jika menggunakan kurung buka dan tutup "ubahWarna()", maka akan langsung menjalankan functionnya tanpa di click

// addEventListener(eventnya mau apa, lakukan sesuatu)
const p4 = document.querySelector("section#b p");

// javascript cariin element p4,
// lalu ketika ada event click, lakukan sesuatu
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("item baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

// perbedaan event handler dan addEventListener
// event handler
const p1 = document.querySelector(".p1");
// p1.onclick = function () {
//     p1.style.backgroundColor = "lightblue";
// }; // function pertama tidak bekerja karena ditimpa oleh function kedua
// p1.onclick = function () {
//     p1.style.color = "red";
// }; // yang bekerja function kedua ini

// addEventListener - kedua function dilakukan
// p1.addEventListener("click", function () {
//   p1.style.backgroundColor = "lightblue";
// });
// p1.addEventListener("click", function () {
//   p1.style.color = "red";
// });

// hover in js (mouseenter & mouseleave)
p1.addEventListener("mouseenter", function () {
  p1.style.backgroundColor = "lightblue";
});
p1.addEventListener("mouseleave", function () {
    p1.style.backgroundColor = "transparent";
});

// best practice
/*

gunakan addEventListener
gunakan event handler : element method
Jangan gunakan event handler : inline html attribute

*/
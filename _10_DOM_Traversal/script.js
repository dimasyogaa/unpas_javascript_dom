// Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
const close = document.querySelectorAll(".close");

// cara 1
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";

//     // e berisi informasi event
//     // console.log(e);
//     // console.log(e.target);

//     e.target.parentElement.style.display = "none";
//   });
// }

// cara 2
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// ------------------------------------------------------
// elementParent
const nama = document.querySelector(".nama");
console.log(nama.textContent);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling); //node setelah elemen yang di target yang memiliki parent yang sama -> nodeValue : enter
console.log(nama.nextElementSibling); //elemen setelah elemen yang di target yang memiliki parent yang sama
console.log(nama.previousSibling); //node sebelum elemen yang di target yang memiliki parent yang sama
console.log(nama.previousElementSibling); //elemen sebelum elemen yang di target yang memiliki parent yang sama
console.log(nama.previousElementSibling.previousElementSibling); //null, karena tidak ada elemennya

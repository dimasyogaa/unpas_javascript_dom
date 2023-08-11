// const close = document.querySelectorAll(".close");

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();

//     // Event Bubbling
//     // menjalankan fungsi parentnya sehingga perlu dihentikan dengan stopPropagation
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// cara lebih efektif
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  // javascript tahu elemen yang di klik itu apa
  // console.log(e.target);

  // jika yang di klik punya nama kelas yaitu close
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});

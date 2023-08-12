const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

//ambil semua element kelas thumb
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  // cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");

    // timeout supaya kelas fade hilang
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500); // setengah detik

    thumbs.forEach(function (thumb) {
      // menghilangkan kelas active

      // cara 1
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }

      // cara 2
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});

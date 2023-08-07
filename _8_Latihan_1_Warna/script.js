// case 1 - mengubah warna body
const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "biru-muda");

  document.body.classList.toggle("biru-muda");
  s;
};

// case 2 -membuat tombol dengan js yang berfungsi mengganti warna body secara random
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna); // taruh setelah tUbahWarna

tAcakWarna.addEventListener("click", function () {
  // Math.random secara default menghasilkan nilai acak dari 0 hingga ke 1
  const r = Math.round(Math.random() * 255 + 1); // menghasilkan nilai 1 hinggal 255, dan menghilangkan koma
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// case 3 - slider range

// javascript carikan saya input yang memiliki attribute name bernilai sMerah
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// case 4 - color bases position mouse cursor
// ketika mouse bergerak di dalam body
document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientX); // kiri atas

  // ukuran browser
  // console.log(window.innerWidth); // lebar document, bukan address bar

  xPos = Math.round((event.clientX / window.innerWidth) * 255);
  yPos = Math.round((event.clientX / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",0)";
});

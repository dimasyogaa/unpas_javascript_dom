// menangkap pilihan computer
// membangkitkan bilangan random
function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// rules
function getHasil(comp, player) {
  if (player == comp) return "SERI!";

  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";

  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";

  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");

  const gambar = ["gajah", "semut", "orang"];

  let i = 0;

  const waktuMulai = new Date().getTime();

  setInterval(function () {
    // console.log(new Date().getTime());
    // console.log(new Date().getTime() - waktuMulai);
    // console.log(waktuMulai);
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval();
      return;
    }

    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");

    if (i == gambar.length) i = 0;
  }, 100); // fungsi melakukan sesuatu secara berulang ulang selama interval waktu tertentu (100 = 0.01 detik)
}

// event : clean code
const pilihan = document.querySelectorAll("li img");
// console.log(pilihan);
pilihan.forEach(function (pil) {
  // console.log(pil);
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className; // mengambil class
    //   console.log("\ncomp : " + pilihanComputer);
    //   console.log("player : " + pilihanPlayer);

    putar();

    setTimeout(function () {
      // ganti gambar
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      // hasil
      const hasil = getHasil(pilihanComputer, pilihanPlayer);
      //   console.log("hasil : " + hasil);

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

/*
// event
const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className; // mengambil class
  //   console.log("\ncomp : " + pilihanComputer);
  //   console.log("player : " + pilihanPlayer);

  // ganti gambar
  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

  // hasil
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  //   console.log("hasil : " + hasil);

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});
*/

/*

untuk tantangan diakhir video aku ngerjainnya gini, mohon koreksi kalo salah dan kurang efektif

let hPlayer = 0, hComputer = 0;
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
 pil.addEventListener('click', function() {
  const pilComp = getPilihanComp();
  const pilPlayer = pil.className;
  const hasil = getHasil(pilComp, pilPlayer);
  const info = document.querySelector('.info');
  // change gambar komputer
  putar();
  setTimeout(function() {
   const imgComp = document.querySelector('.img-komputer');
   imgComp.setAttribute('src', 'img/' + pilComp + '.png');
   // tampilan hasil
   info.innerHTML = hasil;
   if(hasil == 'MENANG') hPlayer++;
   else if(hasil == 'KALAH') hComputer++;
   const p = document.querySelector('.hPlayer');
   const c = document.querySelector('.hComputer');
   p.innerHTML = 'Player : ' + hPlayer;
   c.innerHTML = 'Computer : ' + hComputer;  
  }, 1000);
  info.innerHTML = '';
 })
})

*/

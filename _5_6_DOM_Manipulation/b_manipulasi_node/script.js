// DOM Manipulation

// 1. buat element baru - document.createElement()
const pBaru = document.createElement("p");

// 2. buat teks - doucment.createTextNode()
const teksPBaru = document.createTextNode("Paragraf Baru");

// 3. simpan tulisan ke dalam paragraf
// menyisipkan teksPbaru ke dalam pBaru
pBaru.appendChild(teksPBaru);

// 4. simpan pBaru di akhir section A (menampilkan di web)
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// ---------------------------------------------------------------

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

// liBaru didisipkan ke dalam ul lalu dilatakan sebelemu li2
ul.insertBefore(liBaru, li2);

// ---------------------------------------------------------------

// MENGHAPUS CHILD - removeChild()
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// MENGUBAH CHILD - replaceChild()
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru!");

h2Baru.appendChild(teksH2Baru);

// p4 diganti dengan h2Baru lalu disisipkan ke dalam section B
sectionB.replaceChild(h2Baru, p4)

// menandai element baru
pBaru.style.backgroundColor="lightgreen";
liBaru.style.backgroundColor="lightgreen";
h2Baru.style.backgroundColor="lightgreen";

// Dom Selection
// harus menuliskan document terlebih dahulu sebagai root node

// 1. document.getElementById() -> mengembalikan element
const judul = document.getElementById("judul"); // bertipe data objek

// menambahkan inline css
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";

// mengubah teks
judul.innerHTML = "Yoga Dimas";

// 2. document.getElementsByTagName() -> mengembalikan htmlCollections
const tagP = document.getElementsByTagName("p");
// tagP.style.backgroundColor = "lightblue"; // tidak bisa karena tagP sebuah objek yang berisi htmlCollections seperti array,
// tagP[2].style.backgroundColor = "lightblue"; // harus ditentukan indeksnya

// memberi warna semua tagP
for (let i = 0; i < tagP.length; i++) {
  tagP[i].style.backgroundColor = "lightblue";
}

// tetap htmlcollection meskipun tag h1 berjumlah 1, sehingga bisa dipanggil langsung menggunakan indeks 0
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// 3. document.getElementsByClassName() -> mengembalikan htmlCollections
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";

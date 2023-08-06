const p2 = document.querySelector(".p2");

// 1. menambah class - add()
p2.classList.add("label2");
console.log(p2.classList);

// 2.menghapus class - remove()
p2.classList.remove("p2");
console.log(p2.classList);

console.log("");
console.log("");
console.log("");

// 3. cek - toogle()

// jika tidak ada classnya -> tambahkan,
p2.classList.toggle("label");
console.log(p2.classList);
console.log("");
console.log(p2.classList.toggle("label-p2")); // true
console.log(p2.classList);

console.log("");
console.log("");

// jika ada classnya -> hapus
p2.classList.toggle("label");
console.log(p2.classList);
console.log("");
console.log(p2.classList.toggle("label-p2")); // false
console.log(p2.classList);

const body = document.querySelector("body");
//coba di console
body.classList.toggle("biru-muda"); // menambahkan class
body.classList.toggle("biru-muda"); // menghapus class

console.log("");
console.log("");
console.log("");

// 4. mencari kelas dengan index - item()
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.add("tiga");
console.log(p2.classList);
console.log(p2.classList.item(2));

console.log("");
console.log("");
console.log("");

// 5. cek apakah ada kelasnya - contains()
console.log(p2.classList.contains("dua")); // true
console.log(p2.classList.contains("lima")); // false

// 6. mengubah class - replace()
p2.classList.replace("dua", "lima") // replace dua jadi lima
console.log(p2.classList);

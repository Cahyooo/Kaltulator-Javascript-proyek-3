// Ambil DOM
const hasil = document.querySelector(".hasil");
const button = document.querySelectorAll(".bawah div");
const button2 = document.querySelectorAll(".bawah div p");
const dalam = document.querySelectorAll(".bawah p");
const value = document.querySelector(".value");
const C = document.querySelector(".reset p");

button.forEach((a) => {
  a.addEventListener("click", function (e) {
    let isi = a.querySelector("p");
    let b = isi.textContent;
    let teks = value.textContent;
    let char = teks.slice(0, -1);
    let lastChar = teks.slice(-1);
    let pisah = teks.split(/[+\-*\/]/);

    console.log(pisah);
    if (a.textContent <= 9 && a.textContent >= 0) {
      value.textContent = teks + b;
      console.log(e.target);
    } else if (isi.textContent == "C") {
      value.textContent = "";
    } else if (isi.textContent == "DEL") {
      value.textContent = char;
    } else if (isi.textContent == "/") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "."
      ) {
      } else {
        value.textContent = teks + b;
      }
    } else if (isi.textContent == "*") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "."
      ) {
      } else {
        value.textContent = teks + b;
      }
    } else if (isi.textContent == "-") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "."
      ) {
      } else {
        value.textContent = teks + b;
      }
    } else if (isi.textContent == "+") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "."
      ) {
      } else {
        value.textContent = teks + b;
      }
    } else if (isi.textContent == ".") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "."
      ) {
      } else {
        for (let i = 0; i < pisah.length; i++) {
          let angka = pisah[i];
          let cek = angka.split(".");
          if (cek.length > 1) {
          } else {
            value.textContent = teks + b;
          }
        }
      }
    } else if (isi.textContent == "%") {
      let persen = pisah[pisah.length - 1] * 0.01;

      value.textContent = persen;
    } else if (isi.textContent == "=") {
      let hitung = eval(teks);
      value.textContent = hitung;
    }
  });
});


console.log("Selamat mencoba kaltulator");

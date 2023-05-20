// Ambil DOM
const hasil = document.querySelector(".hasil");
const button = document.querySelectorAll(".bawah div");
const value = document.querySelector(".value");
const other = document.querySelectorAll(".tombolOther div");
const alt = document.querySelector(".other");
const geser = document.querySelector(".geser");

button.forEach((a) => {
  a.addEventListener("click", function () {
    let isi = a.querySelector("p");
    let b = isi.textContent;
    let teks = value.textContent;
    let char = teks.slice(0, -1);
    let lastChar = teks.slice(-1);
    let secLastChar = teks.slice(-2);
    let pisah = teks.split(/[+\-*\/]/);
    let indexTerakhir2 = secLastChar.charAt(1);
    // console.log(indexTerakhir2);

    // console.log(pisah);
    if (a.textContent <= 9 && a.textContent >= 0) {
      if (value.textContent == "0") {
        setTimeout(() => {
          value.textContent = "";
          teks = "";
          setTimeout(() => {
            value.textContent = teks + b;
          }, 2);
        }, 1);
      } else if (pisah[pisah.length - 1] == "0") {
        if (a.textContent == "0") {
          setTimeout(() => {
            pisah[pisah.length - 1].textContent = "";
            teks = "";
            setTimeout(() => {
              value.textContent = teks + b;
            }, 2);
          }, 1);
        }
      } else {
        setTimeout(() => {
          value.textContent = teks + b;
        }, 2);
        if (lastChar == ")") {
          setTimeout(() => {
            value.textContent = teks + "*" + isi.textContent;
          }, 3);
        }
      }
    } else if (isi.textContent == "C") {
      value.textContent = "0";
    } else if (isi.textContent == "DEL") {
      if (value.textContent == "0") {
      } else if (value.textContent == "Can't devide with 0") {
        value.textContent = "0";
      } else {
        if (value.textContent.length == 1) {
          setTimeout(() => {
            value.textContent = "0";
          }, 1);
        }
        value.textContent = char;
      }
    } else if (isi.textContent == "/") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "." ||
        lastChar == ""
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
        lastChar == "." ||
        lastChar == ""
      ) {
      } else {
        value.textContent = teks + b;
      }
    } else if (isi.textContent == "-") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "+" ||
        secLastChar == "(-"
      ) {
        value.textContent = teks + "(-"
      }else if (lastChar == "-" ||  lastChar == ".") {}
      else {
        value.textContent = teks + b;
      }
    } else if (isi.textContent == "+") {
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "." ||
        lastChar == ""
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
        lastChar == "." ||
        lastChar == ""
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
      if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "." ||
        lastChar == "(" ||
        lastChar == ")"
      ) {
      }
      else {
        let persen = pisah[pisah.length - 1] * 0.01;
        let setelah = teks.slice(0,-(pisah[pisah.length - 1].length));
        value.textContent = setelah + persen;
      }
    } else if (isi.textContent == "=") {
      let hitung = eval(teks);
      value.textContent = hitung;
      if (secLastChar == "/0") {
        value.textContent = "Can't devide with 0";
      }
      if (hitung == "0.30000000000000004") {
        value.textContent = "0.3";
      }
    }
  });
});

other.forEach((a) => {
  a.addEventListener("click", function () {
    let isi = a.querySelector("p");
    let b = isi.textContent;
    let teks = value.textContent;
    let char = teks.slice(0, -1);
    let char2 = teks.slice(0, -2);
    let lastChar = teks.slice(-1);
    let secLastChar = teks.slice(-2);
    let pisah = teks.split(/[+\-*\/]/);
    let indexTerakhir2 = secLastChar.charAt(1);

    if (isi.textContent == "(") {
      if (indexTerakhir2 <= "9" && indexTerakhir2 >= "0") {
        value.textContent = teks + "*(";
      }else if (
        lastChar == "/" ||
        lastChar == "*" ||
        lastChar == "-" ||
        lastChar == "+" ||
        lastChar == "." ||
        lastChar == "(" ||
        lastChar == ")"
      ){
        value.textContent = teks + "("
      }
       else if (teks <= "9" && teks >= "1") {
        value.textContent = teks + "*(";
      } else if (value.textContent == "0") {
        value.textContent = "(";
      } else {
        value.textContent = teks + "(";
      }
    } else if (isi.textContent == ")") {
      value.textContent = teks + ")";
    } else if (isi.textContent == "√") {
      value.textContent = teks + "**(0.5)";
    } else if (isi.textContent == "^") {
      value.textContent = teks + "**";
    }
  });
});

let x = 1;
let kiriOrKanan = geser.querySelector("p");
geser.addEventListener("click", function () {
  if (x == 1) {
    alt.style.transform = "translateX(-14.18vw)";
    kiriOrKanan.textContent = ">";
    x++;
  } else if (x == 2) {
    alt.style.transform = "translateX(0)";
    kiriOrKanan.textContent = "<";
    x = 1;
  }
});

console.log("Selamat mencoba kaltulator");

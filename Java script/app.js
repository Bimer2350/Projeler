alert("Hoşgeldiniz")

let mat = "Matematik notunuz : "
let matematik = prompt("Lütfen matematik notunuzu giriniz.");
console.log(mat+matematik);

let tur = "Türkçe notunuz : "
let turkce = prompt("Lütfen türkçe notunuzu giriniz.");
console.log(tur+turkce);

let fen = "Fen Bilimleri notunuz : "
let fenbilimleri = prompt("Lütfen Fen Bilimleri notunuzu giriniz.");
console.log(fen+fenbilimleri);

let ing = "İngilizce notunuz : "
let ingilizce = prompt("Lütfen İngilizce notunuzu giriniz.");
console.log(ing+ingilizce);

let tar = "Tarih notunuz : "
let tarih = prompt("Lütfen Tarih notunuzu giriniz.");
console.log(tar+tarih);

let toplam = Number(matematik)*Number(6) + Number(turkce)*Number(5) + Number(fenbilimleri)*Number(4) + Number(ingilizce)*Number(4) + Number(tarih)*Number(2);
let ortalama = toplam / 21
let w = "Ortalama : "
console.log(w + ortalama)
if(ortalama>=85){
    console.log("Tebrikler sınıfı geçtiniz.Ayrıca Takdir belgeside kazandınız.");
}
if(ortalama>=75 && ortalama<85){
    console.log("Tebrikler sınıfı geçtiniz.Ayrıca Teşekkür belgeside kazandınız.");
}
if(ortalama>=50 && ortalama<75){
    console.log("Tebrikler sınıfı geçtiniz.");
}
if(ortalama<50){
    console.log("Sınıfı geçemediniz.");
}




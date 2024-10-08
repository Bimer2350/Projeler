alert("Bir bölüme değer girmediğiniz zaman 0(Sıfır) olarak alınır")

let bos = "\n\r";

let sayi = prompt("Lüfen bir sayı giriniz.");
let islem = prompt("Yapacağınız işlemi giriniz."+bos
    +"+    :    -    :    *    :     /    "+bos+"**"
);
let sayi2 = prompt("Lüfen bir sayı giriniz.");


document.write("Sonuç : ")



if(islem == "*"){
    document.write( Number(sayi)*Number(sayi2))
}
else if(islem == "/"){
    document.write( Number(sayi)/Number(sayi2))
}
else if(islem == "-"){
    document.write( Number(sayi)-Number(sayi2))
    }
    else if(islem == "+"){
        
        document.write( Number(sayi)+Number(sayi2))
        }
        else if(islem =="**"){
            document.write(sayi**=sayi2)
        }
        else{
            document.write("Hatalı İşlem girdiniz.")
        }
            
            
        
     

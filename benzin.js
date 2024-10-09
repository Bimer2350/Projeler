let bos = "\r\n"

let yakittürü = prompt("Lütfen Yakıt türü giriniz."+bos+"1-Lpg = 20.00"+bos+"2-Dizel = 30.00"+bos+"3-Benzin = 40.00")
let litre = prompt("Lütfen yakıt litresi giriniz.")
let bakiye = prompt("Lütfen bakiyenizi girin")

let lpg = 20
let dizel = 30
let benzin = 40

let kb = "Kalan bakiye : "
let al = "Alınan litre : "
let yc = "Yakıt cinsi  : "

let lpg1 = "LPG"
let dizel1 = "Dizel"
let benzin1 = "Benzin"

let iob = "İşlem öncesi bakiye : "
let tut = "Tutar : "
let isb = "İşlem sonrası bakiye : "


if(yakittürü == 1 , "LPG" ,"Lpg","lpg"){
    console.log(yc+lpg1)
    console.log(al+litre)
    console.log(tut+Number(litre)*lpg)
    console.log(iob+bakiye)
    console.log(isb+(Number(bakiye)-Number(litre)*lpg))
    
    

}
else if(yakittürü == 2 , "Dizel","DİZEL","dizel"){
    console.log(yc+dizel1)
    console.log(al+litre)
    console.log(tut+Number(litre)*dizel)
    console.log(iob+bakiye)
    console.log(isb+(Number(bakiye)-Number(litre)*dizel))
    

}
    
   else if(yakittürü == 3 , "Benzin","BENZİN","benzin"){
        console.log(yc+benzin1)
    console.log(al+litre)
    console.log(tut+Number(litre)*benzin)
    console.log(iob+bakiye)
    console.log(isb+(Number(bakiye)-Number(litre)*benzin))
    
    }
    else{
        console.log("Lütfen geçerli bir yakıt türü seçin.")
    }

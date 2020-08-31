var a = 20;
console.log(typeof a); //veri tipini gormemizi sagliyor.
var b = null;
console.log(typeof b);
//Referance veri tipi tanimalama
var person ={
    name: "Burakhan Bakir",
    age: 25
}
console.log(person);
console.log(person.age);
//function
var func = function(){
    console.log("Fonksiyon test edilmistir.");
}
console.log(func);
//let,const
let name = "burak";
console.log(name);
//let farki 2 defa ayni isimde arka arkaya degisken tanimlanamaz.
const name2 = "Burak";
//name2="burakss" -> const farki degiskene sonradan deger atanamiyor.
const arr = [0,1];
console.log(arr); 
arr.push(2);
console.log(arr);
//Onemli! -> Fakat push yapilabiliyor. Cunku degiskenin degeri yani bellekteki gosterdigi yer degismiyor. Gosterdigi yere sadece extra veri ekleniyor.

//Veri tiplerini degistirme
let value = 123;
value = String(123); //convert to string
value = (10).toString();//convert to string
//convert to int
value = Number("123");
//value = Number("burak"); Hata verir cunku icinde sayi barindirmiyor.

console.log(value);
console.log(typeof value);


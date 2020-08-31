//String islemleri
let value;
const firstname = "BurakHan";
const langs = "java,c++,php";
value = firstname.length;//uzunlugu verir
value = firstname.concat(" ","Bakir");//ekleme yapar
value = firstname.toLowerCase();//hepsini kucuk karakter yapar
value = firstname.toUpperCase();//hepsini buyuk karakter yapar
value = firstname.indexOf("u");//karakterin index no verir
value = firstname.charAt(0);//0 index no hangi elemans onu verir
value = langs.split(",");//virgule gore ayirip array yapar
value = langs.replace("java","CSS");//java degerini css ile degistirir
value = langs.includes("java");//deger varsa true dogru dondurur
console.log(value);
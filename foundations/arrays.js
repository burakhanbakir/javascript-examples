//arrays
let value;
const numbers = [40,50,33,44,38,12,24];
const langs = ["Phyton","PHP","C++","JavaScript"];
const mix = ["Merhaba",22,null,undefined,3.14];
//const numbers = new Array (40,50,33,44,38,12,24);
value = numbers.indexOf(40);//elemanin index no verir
numbers.push(2000);//array sonuna deger ekler
numbers.push(2000);//array basina deger ekler
numbers.pop();//sonundan deger atar
numbers.shift;//basindan deger atar
numbers.splice(0,3);//0 ve 3 index no araligini atar
numbers.reverse();//diziyi ters cevirir
numbers.sort(function(x,y){
    return x - y;
    //return y - x; buyukten kucuge siralar
});//diziyi kucukten buyuge siralar siralar

console.log(value);
//Global scope
var value1 = 10;
let value2 = 20;
const value3 = 30;

function func2(){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1,value2,value3);
}
func2();

console.log(value1,value2,value3);
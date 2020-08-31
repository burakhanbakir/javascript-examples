//fonksiyon tanimlama
function hello(){
    console.log("Hello World");
}

hello();//function call

function person (name = "no info",age="no info")
{
    //if(typeof name === "undefined") name="No info";
    console.log(`firstname: ${name} Age: ${age}`);
}

person("Burakhan", 25);

function square(x){
    return x * x;
}

function cube(x){
    return x*x*x;
}

let a  = cube(square(12));
console.log(a);

//function expression

const msg = function(firstname){
    console.log("Hello" + firstname)
};

msg("Burak");

//Immediately Invoked Function Expression (IIFE)

(function (fname){
    console.log("Hello" + fname);
})("Burak");

//Anonim object example
const database = {
    host: "localhost",
    add: function(){
        console.log("Added");
    },
    get: function(){
        console.log("got it");
    },
    update: function(id){
        console.log(`id: ${id} Updated`);
    },
    delete: function(id){
        console.log(`id ${id} Deleted`);
    }
}

console.log(database.host);
database.add();
database.delete(10);
//element id gore secme
let element;
element = document.getElementById("todo-form");
//element class gore secme
element = document.getElementsByClassName("list-group-item")[0];//ilk eleman ceker. Class olarak cekildiginde array dondurur
//element tag gore secme
element = document.getElementsByTagName("div");
//query selector ile secme
element = document.querySelector("#todo-form");//id gore
element = document.querySelector("#tasks-title");//id gore
element = document.querySelector(".list-group-item");//class gore
element = document.querySelectorAll(".list-group-item");//tum ogeleri secer. node list doner
element.forEach(function(el){
    console.log(el);//dongu ile secilen elementleri yazdirma
})
console.log(element);
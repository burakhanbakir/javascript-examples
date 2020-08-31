let value;

const programmer ={
    name: "Burakhan Bakir",
    age: 25,
    email: "burak@gmail.com",
    langs: ["PHP","HTML","CSS"],
    address: {
        city: "Warsaw",
        street: "Obozowa"
        //burada ic ice object kullaniyoruz
    },
    work: function(){
        //fonsksiyonda kullanabiliriz..
        console.log("Programci Calisiyor");
    }
}

value = programmer;
value = programmer.email;//istedigimiz alana ulasma
value = programmer["email"];//ikinci kullanim
value = programmer.address.city;//ic ice objeden data cekme
programmer.work()//fonksiyonu calistirma
console.log(value);

//Date objects
const now = new Date();//suan ki zamani alir
const date1 = new Date("8-7-1995 04:15:00");//yeni zaman olusturma
const date1 = new Date("September 7 1995");//yeni zaman olusturma2
const date1 = new Date("7/8/1995");//yeni zaman olusturma3

value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(4);//tarihin ayini editleme
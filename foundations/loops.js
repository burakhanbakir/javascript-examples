//While loops
let i = 0;
while(i<10)
{
    console.log(i);
    if(i==5)
    {break;}
    i++;
}

while(i<10)
{
    console.log(i);
    if(i==3 || i==5)
    {
    i++;
    continue;
    }
    i++;
}

//do while
let j = 0;
do{
    console.log(j);
    j++;
}while(j < 10);

//for loop
const langs = ["C++","Js"];

for(let index=0; index<langs.length; index++){
    console.log(langs[index]);
}

//for each

langs.forEach(function(langs,index){
console.log(langs,index);
});

//maps

const users = [
    {name: "Burak", age:25},
    {name: "Mustafa", age:26}
];

const names = users.map(function(user){
    return user.name;
});
const ages = users.map(function(user){
    return user.age
});

console.log(names);
console.log(ages);

//for in

for(let key in users){
    console.log(key,users[key]);
}
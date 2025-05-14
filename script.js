const cities = [
    { name: "Boston", temperature: 71 },
    { name: "New York", temperature: 75 },
    { name: "Los Angeles", temperature: 80 },
    { name: "Chicago", temperature: 65 },
    { name: "Houston", temperature: 90 },
    { name: "Denver", temperature: 45 },
    {name:"atlanta",temperature:200}
];


let ul = document.querySelector("#cityList")

console.log(ul)


for(let city of cities){
    console.log(city)
}
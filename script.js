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



// 
for(let city of cities){

    let cityName = city.name
    let temp = city.temperature

    // ul.textContent = ul.textContent + " "+  cityName
    
    // ul.innerHTML += `<li>${cityName}</li>`

    let cityLi = document.createElement("li")
    cityLi.innerText = cityName
    cityLi.classList.add('city')

    let tempLi = document.createElement("li")
    tempLi.innerText = `temperature: `+ temp
    tempLi.classList.add('temp')

    // when the city is boston i want make the font bigger
  
    if(cityName == "Boston"){
        cityLi.style.fontSize = "30px"
    }


    ul.appendChild(cityLi)
    ul.appendChild(tempLi)
    // console.log(cityName)
}

// part2: convert those temperatures to celsuis  
let tempList = document.querySelectorAll(".temp")

for (let temp of tempList){

    let fahrenheit = Number(temp.textContent.split(":")[1].trim())
    let celsuis = (fahrenheit-32)/(9/5)
    

//   console.log(fahrenheit)
   temp.textContent = temp.textContent.replace(fahrenheit,celsuis.toFixed(1))

}
console.log(tempList)







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
    

   temp.textContent = temp.textContent.replace(fahrenheit,celsuis.toFixed(1))

}

// part3: color cities based on their temp, if the temp is more than 20 city should be read otherwise blue, also if the city temp is too high remove it , 30


let citiesElements = document.querySelectorAll(".city")

for (let city of citiesElements){
    let tempElement = city.nextSibling
    let temperature = Number(tempElement.textContent.split(":")[1])
    

    //city is boston
    // tempElement is its temperature
    if(temperature>30){
        citycity.nextSibling.remove()
        tempElement.remove()
        continue
    }

    if(temperature > 20){
        city.style.color="red"
    }else{
        city.style.color="blue"
    }

    console.log(temperature)
     

}
console.log(citiesElements)



// querySelector
// querySelectorAll
// createElement
// append
// textContent
//remove
// nextSibling // the idea of relationships 
//innerText
//classList 

//split // return an array and you need to access specfic element in the array
// Number
//trim
//for of 
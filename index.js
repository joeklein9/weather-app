let displayHtml = ""        


const cityInput = document.getElementById("city-input")
const getWeatherBtn = document.getElementById("get-weather-btn")
let cityDisplay = document.getElementById("city-name-display")
let weatherDisplay = document.getElementById("weather-display")
let weatherDescription = document.getElementById("weather-description")
let card = document.getElementById("card")
    
    
    

getWeatherBtn.addEventListener("click", function (){
   
   if (cityInput.value !== ""&& cityInput.value !== undefined) {
    
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=e23500ef96a823d95fb0ddc49db5b795&units=imperial`) 
        .then (response => response.json())
        .then (data => {
            
        if (data.name !== undefined) {cityDisplay.innerHTML = data.name}
        card.style.visibility = "visible"
        card.innerHTML = `

                <p><span class = "bold">Current: </span> ${Math.floor (data.main.temp)}°</p>
                <p><span class = "bold">Lo:</span> ${Math.floor (data.main.temp_min)}° <span class = "bold">Hi:</span> ${Math.floor (data.main.temp_max)}° </p>
                <p><span class = "bold">${data.weather[0].description.toUpperCase()}</span></p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

`

    })}
    
    cityInput.value = ""
    
})

 

    







//e23500ef96a823d95fb0ddc49db5b795


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

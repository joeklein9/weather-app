const cityInput = document.getElementById("city-input")
const getWeatherBtn = document.getElementById("get-weather-btn")
let cityDisplay = document.getElementById("city-name-display")
let weatherDisplay = document.getElementById("weather-display")
    
    
    

getWeatherBtn.addEventListener("click", function (){
    
    if (cityInput.value !== "") {
    
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=e23500ef96a823d95fb0ddc49db5b795&units=imperial`) 
        .then (response => response.json())
        .then (data => {
            
        cityDisplay.innerHTML = data.name
        weatherDisplay.innerHTML = `${Math.floor (data.main.temp)}°` 
    })}
    
    cityInput.value = ""
    
})

        
        







//e23500ef96a823d95fb0ddc49db5b795

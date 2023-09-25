import './style.css'

const locationInput = document.getElementById('location')
const days = document.getElementById('days')
const form = document.getElementById('form')

async function callAPI() {
    const weatherResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2e21eea24f714bb4a65154936231909&q=${locationInput.value}&days=${days.value}&aqi=no&alerts=no)`, {mode: 'cors'})
    const weatherData = await weatherResponse.json()
    console.log(weatherData)
}

function submitForm(event) {
    event.preventDefault()
    callAPI()
}

form.onsubmit = submitForm

// new Date().getHours() will return current hours in local time
import './style.css'

const locationInput = document.getElementById('location')
const days = document.getElementById('days')
const form = document.getElementById('form')
const forecast = document.getElementById('weather-forecast')

const dailyData = [
    {name: 'maxtemp_f', label: 'High', unit: '°f'},
    {name: 'mintemp_f', label: 'Low', unit: '°f'},
    {name: 'avghumidity', label: 'Humidity', unit: '%'},
    {name: 'maxwind_mph', label: 'Wind', unit: ' mph'},
    {name: 'avgvis_miles', label: 'Visibility', unit: ' mi'},
    {name: 'daily_chance_of_rain', label: 'Rain chance', unit: '%'},
    {name: 'daily_chance_of_snow', label: 'Snow chance', unit: '%'},
    {name: 'totalprecip_in', label: 'Precipitation', unit: ' in'}
]

async function callAPI() {
    const weatherResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2e21eea24f714bb4a65154936231909&q=${locationInput.value}&days=${days.value}&aqi=no&alerts=no)`, {mode: 'cors'})
    const weatherData = await weatherResponse.json()
    console.log(weatherData.forecast.forecastday[0])
    console.log(weatherData)
    createForecastElements(weatherData)
}

function submitForm(event) {
    event.preventDefault()
    callAPI()
}

form.onsubmit = submitForm

function createForecastElements(dataset) {
    for(let i=0; i<days.value; i++) {
        const element = document.createElement('div')
        element.classList.add('forecast-day')
        const header = document.createElement('div')
        header.classList.add('forecast-day-header')
        let month = dataset.forecast.forecastday[i].date.slice(5,7)
        switch (month) {
            case '01':
                month = 'January';
                break;
            case '02':
                month = 'February';
                break;
            case '03':
                month = 'March';
                break;
            case '04':
                month = 'April';
                break;
            case '05':
                month = 'May';
                break;
            case '06':
                month = 'June';
                break;
            case '07':
                month = 'July';
                break;
            case '08':
                month = 'August';
                break;
            case '09':
                month = 'September';
                break;
            case '10':
                month = 'October';
                break;
            case '11':
                month = 'November';
                break;
            case '12':
                month = 'December';
                break;
        }
        header.textContent += `${month} `
        header.textContent += `${dataset.forecast.forecastday[i].date.slice(8,10)}`
        header.textContent = i === 0 ? 'Today' : header.textContent
        element.appendChild(header)
        const subHeader = document.createElement('div')
        subHeader.classList.add('forecast-day-subheader')
        subHeader.textContent = `${dataset.forecast.forecastday[i].day.condition.text}`
        element.appendChild(subHeader)
        dailyData.forEach(item => {
            const databit = document.createElement('div')
            databit.classList.add('databit')
            const databitHeader = document.createElement('div')
            databitHeader.classList.add('databit-header')
            databitHeader.textContent = `${item.label}`
            databit.appendChild(databitHeader)
            const databitContent = document.createElement('div')
            databitContent.classList.add('databit-content')
            databitContent.textContent = `${dataset.forecast.forecastday[i].day[item.name]}${item.unit}`
            databit.appendChild(databitContent)
            element.appendChild(databit)
        })
        forecast.appendChild(element)
    }
}
// weather.js

// Define the API key and base URL
const apiKey = '8426e72631d65163b4f80e5e6bcd41fa';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch and display current weather information
async function getCurrentWeather() {
    try {
        // Fetch weather data from the API
        const response = await fetch(`${baseUrl}?lat=40.2969&lon=-111.6946&appid=${apiKey}&units=imperial`);
        if (response.ok) {
            const data = await response.json();
            displayWeatherInfo(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display current weather information
function displayWeatherInfo(data) {
    const weatherInfo = document.getElementById('weather-info');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherInfo.innerHTML = `
        <img src="${icon}" alt="${description}" class="weather-icon">
        ${temperature}&deg;F - ${description}
    `;
}

// Call the function to fetch and display current weather information
getCurrentWeather();
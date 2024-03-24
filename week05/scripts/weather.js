// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Specify the latitude and longitude for Orem, Utah
const latitude = '40.2968';
const longitude = '-111.6946';
const apiKey = '8426e72631d65163b4f80e5e6bcd41fa';

// Construct the API request URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Define the asynchronous function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing purposes
            displayResults(data); // Update the webpage with the fetched data
        } else {
            throw new Error('Failed to fetch the weather data.');
        }
    } catch (error) {
        console.error(error);
    }
}

// Call the apiFetch function to initiate the API request
apiFetch();

// Define the displayResults function to update the HTML with the fetched weather data
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconUrl);
    captionDesc.textContent = desc;
}

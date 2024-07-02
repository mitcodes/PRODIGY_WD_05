document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const locationInput = document.getElementById("query");
    const searchForm = document.getElementById("searchForm");
    const cityNameElement = document.getElementById("cityName");
    const temperatureElement = document.getElementById("temperature");
    const weatherDescriptionElement = document.getElementById("weatherDescription");

    // Event listener for the search form submission
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the value of the location input field
        const location = locationInput.value;

        // Simulate fetching weather data (replace this with your actual API call)
        simulateFetchWeather(location);
    });

    // Function to simulate fetching weather data
    function simulateFetchWeather(location) {
        // Simulate fetching weather data with a delay
        setTimeout(function() {
            // Mock weather data
            const cityName = location;
            const temperature = Math.floor(Math.random() * 30) + 10; // Random temperature between 10°C and 39°C
            const weatherDescription = "Sunny"; // Mock weather description

            // Update the weather info on the webpage
            cityNameElement.textContent = cityName;
            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            weatherDescriptionElement.textContent = `Weather: ${weatherDescription}`;
        }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
    }
});

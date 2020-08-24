const httpClient = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=4452811edc6bdb2f04ac6734efba18bb&query=22.566898,88.273911&units=f';

const data = httpClient.get(url, {json:true}, (error, response) => {
    const currentWeatherData = response.body.current;
    console.log(currentWeatherData.weather_descriptions[0] + '. Its is currently '+currentWeatherData.temperature+' degrees out. But feels like '+currentWeatherData.feelslike+' degrees.');
});
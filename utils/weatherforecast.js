const httpClient = require('postman-request');

const currentWeather = (lattitude,longitude,callback) => {
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=4452811edc6bdb2f04ac6734efba18bb&query=' +longitude+ ',' +lattitude+ '&units=f';

    httpClient.get(weatherUrl, {json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to WeatherStack api',undefined);
        } else if (response.body.error) {
            callback('Please enter a proper location',undefined);
        } else {
            const currentWeatherData = response.body.current;
            callback(undefined,currentWeatherData.weather_descriptions[0] + '. Its is currently '+currentWeatherData.temperature+' degrees out. But feels like '+currentWeatherData.feelslike+' degrees.');
        }
    });
};

module.exports = {
    forecast: currentWeather
};
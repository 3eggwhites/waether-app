const httpClient = require('postman-request');

// const weatherUrl = 'http://api.weatherstack.com/current?access_key=4452811edc6bdb2f04ac6734efba18bb&query=22.566898,88.273911&units=f';

// const weatherData = httpClient.get(weatherUrl, {json:true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to WeatherStack api');
//     } else if (response.body.error) {
//         console.log('Please enter a proper location');
//     } else {
//         const currentWeatherData = response.body.current;
//         console.log(currentWeatherData.weather_descriptions[0] + '. Its is currently '+currentWeatherData.temperature+' degrees out. But feels like '+currentWeatherData.feelslike+' degrees.');
//     }
// });

// const geoLocationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Howrah.json?access_token=pk.eyJ1IjoiYXlhbm1hcGJveDEiLCJhIjoiY2tlOHc1c2lsMDBoYTJzcDdubjMzZmV2eiJ9.ZFYvbLTL95rXMZ2p-CFcFQ&limit=1';

// httpClient.get(geoLocationUrl, {json:true}, (error,response) => {
//     if (error) {
//         console.log('Unable to connect to Mapbox api');
//     } else if(response.body.features.length === 0) {
//         console.log('Please provide a valid location');
//     } else {
//         const geolocationData = response.body;
//         console.log('Lattitude = '+geolocationData.features[0].center[1]);
//         console.log('Longitude = '+geolocationData.features[0].center[0]);
//     }
// });

const geoCode = (address, callback) => {
    const geoLocationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXlhbm1hcGJveDEiLCJhIjoiY2tlOHc1c2lsMDBoYTJzcDdubjMzZmV2eiJ9.ZFYvbLTL95rXMZ2p-CFcFQ&limit=1';
    httpClient.get(geoLocationUrl, {json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to Mapbox api',undefined);
        } else if (response.body.features.length === 0) {
            callback('Please provide a valid location', undefined);
        } else {
            const geolocationData = response.body;
            const data = {
                lat: geolocationData.features[0].center[1],
                long: geolocationData.features[0].center[0]
            };
            callback(undefined,data);
        }
    });
}

geoCode('Howrah12', (error, data) => {
    console.log('Error: '+error);
    console.log('Data: '+JSON.stringify(data));
});
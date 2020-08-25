const geoLocation = require('./utils/geocode');
const weatherForecast = require('./utils/weatherforecast');

weatherForecast.forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

geoLocation.geoCode('Boston', (error, data) => {
    console.log('Error: '+error);
    console.log('Data: '+JSON.stringify(data));
});
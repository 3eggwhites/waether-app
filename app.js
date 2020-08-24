const httpClient = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=4452811edc6bdb2f04ac6734efba18bb&query=22.566898,88.273911';

const data = httpClient.get(url, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});
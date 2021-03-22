const axios = require('axios');
let getCordinates_Url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=&facet=zip&refine.zip='
let getPoints_Url = 'https://api.weather.gov/points/';

const getCordinates = (zip) => {
    let url = getCordinates_Url + zip;
    return axios.get(url);
};

const getPoints = (latitude, longitude) => {
    let url = getPoints_Url + `${latitude},${longitude}`;
    console.log(`getPoints ${url}`);
    return axios.get(url);
}

const getForecast = (url) => {
    return axios.get(url);
}

exports.getCordinates = getCordinates;
exports.getPoints = getPoints;
exports.getForecast = getForecast;

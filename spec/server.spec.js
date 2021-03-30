const axios = require('axios');
const externalApi = require("../External/external-api");
const localUrl = "http://localhost:4000/"
const server = require('../server');

describe("weatherApp Server", function () {
    let getCordinatesRes = JSON.parse('{"nhits":1,"records":[{"fields":{"longitude":-74.31104,"latitude":40.535304}}]}');
    let getPointsRes = JSON.parse('{"properties":{"forecast":"http://localhost:4000/gridpoints/PHI/74,105/forecast"}}');
    let getForecastRes = JSON.parse('{"properties":{"periods":[{"number":1,"name":"This Afternoon","startTime":"2021-03-29T15:00:00-04:00","endTime":"2021-03-29T18:00:00-04:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"NW","icon":"http://localhost:4000/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 55. Northwest wind around 15 mph, with gusts as high as 30 mph."},{"number":2,"name":"Tonight","startTime":"2021-03-29T18:00:00-04:00","endTime":"2021-03-30T06:00:00-04:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"W","icon":"http://localhost:4000/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 36. West wind 0 to 10 mph."}]}}');
    beforeEach(function () {
        spyOn(externalApi, "getCordinates").and.resolveTo({ data: getCordinatesRes });
        spyOn(externalApi, "getPoints").and.resolveTo({ data: getPointsRes });
        spyOn(externalApi, "getForecast").and.resolveTo({ data: getForecastRes });
    });

    afterEach(function () {
        // correct the data:
        getCordinatesRes.nhits = 1;
    })

    // verifies if API returns success response.
    it("GET API returns 200", function (done) {
        axios.get(`${localUrl}forecastByZip/08863`).then(res => {
            expect(externalApi.getCordinates).toHaveBeenCalled();
            expect(externalApi.getPoints).toHaveBeenCalled();
            expect(externalApi.getForecast).toHaveBeenCalled();
            expect(res).toBeDefined();
            expect(res.status).toBe(200);
            done();
        });
    });

    // verifies if API validates input.
    it("GET API returns 400", function (done) {
        axios.get(`${localUrl}forecastByZip/abcde`).catch(err => {
            expect(err).toBeDefined();
            expect(err.response).toBeDefined();
            expect(err.response.status).toBe(400);
            done();
        });
    });

    // verifies if API handles valid format but unknown zip codes
    it("GET API returns 404", function (done) {
        getCordinatesRes.nhits = 0;
        axios.get(`${localUrl}forecastByZip/08863`).catch(err => {
            expect(externalApi.getCordinates).toHaveBeenCalled();
            expect(err).toBeDefined();
            expect(err.response.status).toBe(404);
            done();
        });
    });
});

describe("weatherApp Server Unsuccess cases", function () {
    let getCordinatesRes = JSON.parse('{"nhits":1,"records":[{"fields":{"longitude":-74.31104,"latitude":40.535304}}]}');
    let getPointsRes = JSON.parse('{"properties":{"forecast":"http://localhost:4000/gridpoints/PHI/74,105/forecast"}}');
    //let getForecastRes = JSON.parse('{"properties":{"periods":[{"number":1,"name":"This Afternoon","startTime":"2021-03-29T15:00:00-04:00","endTime":"2021-03-29T18:00:00-04:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"15 mph","windDirection":"NW","icon":"http://localhost:4000/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 55. Northwest wind around 15 mph, with gusts as high as 30 mph."},{"number":2,"name":"Tonight","startTime":"2021-03-29T18:00:00-04:00","endTime":"2021-03-30T06:00:00-04:00","isDaytime":false,"temperature":36,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"0 to 10 mph","windDirection":"W","icon":"http://localhost:4000/icons/land/night/skc?size=medium","shortForecast":"Clear","detailedForecast":"Clear, with a low around 36. West wind 0 to 10 mph."}]}}');
    let errorRes =  { response: { status: 500 } };

    // verifies API behavior if getCordinates fails.
    it("GET API: getCordinates returns 500", function (done) {
        spyOn(externalApi, "getCordinates").and.rejectWith(errorRes);
        axios.get(`${localUrl}forecastByZip/08863`).catch(err => {
            expect(externalApi.getCordinates).toHaveBeenCalled();
            expect(err).toBeDefined();
            expect(err.response.status).toBe(500);
            done();
        });
    });

    // verifies API behavior if getPoints fails.
    it("GET API: getPoints returns 500", function (done) {
        spyOn(externalApi, "getCordinates").and.resolveTo({ data: getCordinatesRes });
        spyOn(externalApi, "getPoints").and.resolveTo(errorRes);
        axios.get(`${localUrl}forecastByZip/08863`).catch(err => {
            expect(externalApi.getCordinates).toHaveBeenCalled();
            expect(externalApi.getPoints).toHaveBeenCalled();
            expect(err).toBeDefined();
            expect(err.response).toBeDefined();
            expect(err.response.status).toBe(500);
            done();
        });
    });

    // verifies API behavior if getForecast fails.
    it("GET API: getForecast returns 500", function (done) {
        spyOn(externalApi, "getCordinates").and.resolveTo({ data: getCordinatesRes });
        spyOn(externalApi, "getPoints").and.resolveTo({ data: getPointsRes });
        spyOn(externalApi, "getForecast").and.resolveTo(errorRes);
        axios.get(`${localUrl}forecastByZip/08863`).catch(err => {
            expect(externalApi.getCordinates).toHaveBeenCalled();
            expect(externalApi.getPoints).toHaveBeenCalled();
            expect(externalApi.getForecast).toHaveBeenCalled();
            expect(err).toBeDefined();
            expect(err.response).toBeDefined();
            expect(err.response.status).toBe(500);
            done();
        });
    });
});
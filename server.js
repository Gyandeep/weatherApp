const express = require('express');
const app = express();
const externalApi = require("./External/external-api");
const validator = require("./validator");
const formatter = require('./formatter');

let port = 4000;

app.listen(port, function () {
    console.log(`node server listening on ${port}`);
});

app.get('/forecastByZip/:zip', (req, res) => {
    if (!validator.isValidZipCode(req.params.zip)) {
        res.status(400).send("Invalid zip code");
        return;
    }
    externalApi.getCordinates(req.params.zip).then(response => {
        let latitude = 0.0, longitude = 0.0;
        if (response
            && response.data
            && response.data.records
            && response.data.records.length > 0
            && response.data.records[0].fields) {
            latitude = response.data.records[0].fields.latitude;
            longitude = response.data.records[0].fields.longitude;
            console.log(`Latitude ${latitude} Longitude ${longitude}`);
            externalApi.getPoints(latitude, longitude).then(points => {
                if (points && points.data && points.data.properties && points.data.properties.forecast) {
                    console.log(`forecast Url ${points.data.properties.forecast}`);
                    externalApi.getForecast(points.data.properties.forecast).then(forecast => {
                        let periods = forecast.data.properties.periods;
                        res.format({
                            'text/plain': function () {
                                res.status(200).send(formatter.formatTextResponse(periods))
                            },
                            'application/json': function () {
                                res.status(200).send(periods)
                            },

                            default: function () {
                                res.status(200).send(periods)
                            }
                        });
                    }).catch(err => {
                        res.status(500).send(`An error occurred while calling getForecast ${err}`);
                    });
                }
                else {
                    res.status(500).send(`getPoints did not return proper response`);
                }
            }).catch(err => {
                res.status(500).send(`An error occurred while calling getPoints ${err}`);
            });
        }
        else {
            //console.log(response.data);
            if (response && response.data && response.data.nhits == 0) {
                res.status(404).send(`Unable to find cordinates for given zip ${req.params.zip}`);
                return;
            }
            res.status(500).send(`getCordinates did not return proper response`);
        }
    }).catch(err => {
        res.status(500).send(`An error occurred while calling getCordinates ${err}`);
    });
});
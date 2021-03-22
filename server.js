const express = require('express');
const app = express();
const externalApi = require("./External/external-api");

let port = 4000;

app.listen(port, function () {
    console.log(`node server listening on ${port}`);
});

app.get('/forecastByZip', (req, res) => {
    externalApi.getCordinates('08863').then(response => {
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
                        //console.log(periods);
                        res.format({
                            'text/plain': function () {
                                res.status(200).send(periods)
                            },
                            'application/json': function () {
                                res.status(200).send(periods)
                            },

                            default: function () {
                                res.status(200).send(periods)
                            }
                        });
                        //res.send(forecastStr);
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
            res.status(500).send(`getCordinates did not return proper response`);
        }
    }).catch(err => {
        res.status(500).send(`An error occurred while calling getCordinates ${err}`);
    });
});

const massageData = (periods) => {
    let forecastStr = ''
    if (periods && periods.length > 0) {
        periods.forEach(x => {
            forecastStr.concat(`${x.name}, ${x.startTime}`);
        });
    }
    return forecastStr;
}
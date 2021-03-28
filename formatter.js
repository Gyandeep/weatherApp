const tab = require('table');

const formatTextResponse = (res) => {
    let config,
        data,
        output;

    let arr = [];

    res.forEach(item => {
        let col1 = `${item.name}, ${item.startTime.substring(0, 10)}:`;
        let col2 = `${item.temperature} ${item.temperatureUnit}`;
        let col3 = `${item.windSpeed} ${item.windDirection}`;
        let col4 = `${item.shortForecast}`
        arr.push([col1, col2, col3, col4]);
    });

    data = res;

    config = {
        singleLine: true,
        border: {
            topBody: ``,
            topJoin: ``,
            topLeft: ``,
            topRight: ``,

            bottomBody: ``,
            bottomJoin: ``,
            bottomLeft: ``,
            bottomRight: ``,

            bodyLeft: ``,
            bodyRight: ``,
            bodyJoin: ``,

            joinBody: ``,
            joinLeft: ``,
            joinRight: ``,
            joinJoin: ``
        }
    };

    output = tab.table(arr, config);

    //console.log(output);
    return output;
}

exports.formatTextResponse = formatTextResponse;
# weatherApp
This repo demonstrates nodeJS API for weather forecast by zip code

Run Locally: npm run dev

Run Tests locally: npm run test

localhost url: http://localhost:4000

sample url: http://localhost:4000/forecastbyzip/08863 (Accepts text/plain & application/json. by default returns content in json)

sample response (text/plain):
```html
 Today, 2021-03-28:            69 F  10 to 15 mph S   Rain Showers                                  
 Tonight, 2021-03-28:          41 F  15 mph W         Showers And Thunderstorms then Mostly Cloudy  
 Monday, 2021-03-29:           56 F  15 to 20 mph W   Sunny                                         
 Monday Night, 2021-03-29:     36 F  0 to 10 mph W    Mostly Clear                                  
 Tuesday, 2021-03-30:          63 F  0 to 10 mph S    Sunny                                         
 Tuesday Night, 2021-03-30:    46 F  5 to 10 mph S    Partly Cloudy                                 
 Wednesday, 2021-03-31:        65 F  5 to 10 mph S    Rain Showers Likely                           
 Wednesday Night, 2021-03-31:  42 F  10 mph SW        Rain Showers                                  
 Thursday, 2021-04-01:         50 F  10 to 20 mph NW  Rain Showers Likely                           
 Thursday Night, 2021-04-01:   28 F  15 to 20 mph NW  Slight Chance Rain Showers then Partly Cloudy 
 Friday, 2021-04-02:           42 F  15 mph NW        Mostly Sunny                                  
 Friday Night, 2021-04-02:     29 F  5 to 15 mph NW   Mostly Clear                                  
 Saturday, 2021-04-03:         53 F  5 to 10 mph W    Mostly Sunny                                  
 Saturday Night, 2021-04-03:   39 F  5 to 10 mph SW   Partly Cloudy                                
```
sample response (json):
```json
[
  {
    "number": 1,
    "name": "This Afternoon",
    "startTime": "2021-03-22T15:00:00-04:00",
    "endTime": "2021-03-22T18:00:00-04:00",
    "isDaytime": true,
    "temperature": 59,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "10 mph",
    "windDirection": "SE",
    "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
    "shortForecast": "Sunny",
    "detailedForecast": "Sunny, with a high near 59. Southeast wind around 10 mph."
  },
  {
    "number": 2,
    "name": "Tonight",
    "startTime": "2021-03-22T18:00:00-04:00",
    "endTime": "2021-03-23T06:00:00-04:00",
    "isDaytime": false,
    "temperature": 37,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 mph",
    "windDirection": "E",
    "icon": "https://api.weather.gov/icons/land/night/sct/fog?size=medium",
    "shortForecast": "Partly Cloudy then Patchy Fog",
    "detailedForecast": "Patchy fog after 1am. Partly cloudy, with a low around 37. East wind around 5 mph."
  },
  {
    "number": 3,
    "name": "Tuesday",
    "startTime": "2021-03-23T06:00:00-04:00",
    "endTime": "2021-03-23T18:00:00-04:00",
    "isDaytime": true,
    "temperature": 61,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 to 10 mph",
    "windDirection": "NE",
    "icon": "https://api.weather.gov/icons/land/day/fog/bkn?size=medium",
    "shortForecast": "Patchy Fog then Partly Sunny",
    "detailedForecast": "Patchy fog before 10am. Partly sunny, with a high near 61. Northeast wind 5 to 10 mph."
  },
  {
    "number": 4,
    "name": "Tuesday Night",
    "startTime": "2021-03-23T18:00:00-04:00",
    "endTime": "2021-03-24T06:00:00-04:00",
    "isDaytime": false,
    "temperature": 44,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 mph",
    "windDirection": "E",
    "icon": "https://api.weather.gov/icons/land/night/bkn/fog?size=medium",
    "shortForecast": "Mostly Cloudy then Patchy Fog",
    "detailedForecast": "Patchy fog after 2am. Mostly cloudy, with a low around 44. East wind around 5 mph."
  },
  {
    "number": 5,
    "name": "Wednesday",
    "startTime": "2021-03-24T06:00:00-04:00",
    "endTime": "2021-03-24T18:00:00-04:00",
    "isDaytime": true,
    "temperature": 55,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 to 10 mph",
    "windDirection": "E",
    "icon": "https://api.weather.gov/icons/land/day/rain_showers,50?size=medium",
    "shortForecast": "Chance Rain Showers",
    "detailedForecast": "Patchy fog before 8am, then a chance of rain showers. Cloudy, with a high near 55. East wind 5 to 10 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."
  },
  {
    "number": 6,
    "name": "Wednesday Night",
    "startTime": "2021-03-24T18:00:00-04:00",
    "endTime": "2021-03-25T06:00:00-04:00",
    "isDaytime": false,
    "temperature": 48,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "0 to 10 mph",
    "windDirection": "SE",
    "icon": "https://api.weather.gov/icons/land/night/rain_showers,50/rain_showers,30?size=medium",
    "shortForecast": "Chance Rain Showers",
    "detailedForecast": "A chance of rain showers. Cloudy, with a low around 48. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible."
  },
  {
    "number": 7,
    "name": "Thursday",
    "startTime": "2021-03-25T06:00:00-04:00",
    "endTime": "2021-03-25T18:00:00-04:00",
    "isDaytime": true,
    "temperature": 68,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "0 to 5 mph",
    "windDirection": "S",
    "icon": "https://api.weather.gov/icons/land/day/rain_showers/bkn?size=medium",
    "shortForecast": "Slight Chance Rain Showers then Mostly Cloudy",
    "detailedForecast": "A slight chance of rain showers before 8am. Mostly cloudy, with a high near 68."
  },
  {
    "number": 8,
    "name": "Thursday Night",
    "startTime": "2021-03-25T18:00:00-04:00",
    "endTime": "2021-03-26T06:00:00-04:00",
    "isDaytime": false,
    "temperature": 54,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 mph",
    "windDirection": "S",
    "icon": "https://api.weather.gov/icons/land/night/bkn/rain_showers,30?size=medium",
    "shortForecast": "Mostly Cloudy then Chance Rain Showers",
    "detailedForecast": "A chance of rain showers after 2am. Mostly cloudy, with a low around 54. Chance of precipitation is 30%."
  },
  {
    "number": 9,
    "name": "Friday",
    "startTime": "2021-03-26T06:00:00-04:00",
    "endTime": "2021-03-26T18:00:00-04:00",
    "isDaytime": true,
    "temperature": 71,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 to 15 mph",
    "windDirection": "SW",
    "icon": "https://api.weather.gov/icons/land/day/rain_showers,50/tsra,50?size=medium",
    "shortForecast": "Chance Rain Showers",
    "detailedForecast": "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 71. Chance of precipitation is 50%."
  },
  {
    "number": 10,
    "name": "Friday Night",
    "startTime": "2021-03-26T18:00:00-04:00",
    "endTime": "2021-03-27T06:00:00-04:00",
    "isDaytime": false,
    "temperature": 47,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "10 to 15 mph",
    "windDirection": "W",
    "icon": "https://api.weather.gov/icons/land/night/tsra_hi,40/sct?size=medium",
    "shortForecast": "Chance Showers And Thunderstorms then Partly Cloudy",
    "detailedForecast": "A chance of showers and thunderstorms before 8pm. Partly cloudy, with a low around 47. Chance of precipitation is 40%."
  },
  {
    "number": 11,
    "name": "Saturday",
    "startTime": "2021-03-27T06:00:00-04:00",
    "endTime": "2021-03-27T18:00:00-04:00",
    "isDaytime": true,
    "temperature": 60,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "10 mph",
    "windDirection": "W",
    "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
    "shortForecast": "Sunny",
    "detailedForecast": "Sunny, with a high near 60."
  },
  {
    "number": 12,
    "name": "Saturday Night",
    "startTime": "2021-03-27T18:00:00-04:00",
    "endTime": "2021-03-28T06:00:00-04:00",
    "isDaytime": false,
    "temperature": 43,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 to 10 mph",
    "windDirection": "SE",
    "icon": "https://api.weather.gov/icons/land/night/sct/rain_showers?size=medium",
    "shortForecast": "Partly Cloudy then Slight Chance Rain Showers",
    "detailedForecast": "A slight chance of rain showers after 2am. Partly cloudy, with a low around 43."
  },
  {
    "number": 13,
    "name": "Sunday",
    "startTime": "2021-03-28T06:00:00-04:00",
    "endTime": "2021-03-28T18:00:00-04:00",
    "isDaytime": true,
    "temperature": 56,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 to 10 mph",
    "windDirection": "E",
    "icon": "https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers,40?size=medium",
    "shortForecast": "Chance Rain Showers",
    "detailedForecast": "A chance of rain showers. Partly sunny, with a high near 56. Chance of precipitation is 40%."
  },
  {
    "number": 14,
    "name": "Sunday Night",
    "startTime": "2021-03-28T18:00:00-04:00",
    "endTime": "2021-03-29T06:00:00-04:00",
    "isDaytime": false,
    "temperature": 43,
    "temperatureUnit": "F",
    "temperatureTrend": null,
    "windSpeed": "5 to 10 mph",
    "windDirection": "S",
    "icon": "https://api.weather.gov/icons/land/night/rain_showers,40?size=medium",
    "shortForecast": "Chance Rain Showers",
    "detailedForecast": "A chance of rain showers. Mostly cloudy, with a low around 43. Chance of precipitation is 40%."
  }
]
```

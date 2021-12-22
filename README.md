# Welcome, a fellow developer, I'm glad you are here!

Please, put the solution on GitHub and send the link back via email.
Enjoy!

# The day to day task: weather forecast

Using the free open weather map two API endpoints (the key is on the weather service)
https://openweathermap.org/api/one-call-api
https://openweathermap.org/api/geocoding-api

-   Build an application that allows you to search the weather forecast hourly or daily for a city.
-   The UI has a search box and two filter options, `hourly` and `daily`, and a table.
-   When a new city is searched, we need first to get its coordinates using `http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid={API key}` and then for the hourly mode make a call to `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,daily,alerts&appid={API key}`, and for the daily mode `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,hourly,alerts&appid={API key}` and add it to a city table.
-   When no city is found, we should reflect it.
-   The city table has a column`City Name`, and the rest are temperature columns. In the case of hourly mode, 8 columns with 3-hour step and in the case of daily mode 7 days.
-   Switching between hourly and daily modes should bring back the previous state of the table before switching.
-   The URL should be updated according to the search query and mode. That is two parameters on the URL.
-   Build the application using NgRx.
-   SOLID, DRY, shouldn't be just abbreviations for you. It should be designed to be maintainable to an extent.
-   Tests are not necessary.
-   Please use repositories formatting.

# TODO: 
- [x] Functional analysis `(Check assets/functional-analysis folder)`
- [] Technical analysis 
- [] Dev excution
    - [] Architecture & generating components.
    - [] UI 
    - [] state & logic
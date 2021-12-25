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

-   [x] Functional analysis `(Check assets/functional-analysis folder)`
-   [x] Technical analysis
    -   We have duplicated table with the only difference of column name and column number (8 vs 7)
    ```html
         <!-- this component will listen to table type and then change columns accordinly -->
        <app-dynamic-forcast-table [tableType]="tableType">
            <!-- this component will be responsable of displying ColumnsTempertaure and CityColumn  -->
            <app-forcast-table-ui [cityColumn]="cityColumn" [TemperaturesColumns]="TempColumns" ></app-forcast-table-ui>
        </app-dynamic-forcast-table></app-dynamic-forcast-table>
    ```
    -   We need to integrate NGRX.
    -   Type and search component for searching and displying cities.
    ```html
    this component handles Ui logic. displaying searcing...| handling list of found results | handling no found city.
    <app-typeahead-ui> </app-typeahead-ui>
    ```
    -   NgBootstrap for the UI (simple and fast)
-   [] Dev excution
    -   [x] Architecture & generating components.
        -   [x] install and config NgBoostrap
        -   [x] install NGRX
        -   [x] Folders structure
        -   [x] Config routes/modules (not found, forcast, shared)
        -   [x] Models
    -   [x] UI
        -   [x] Table forecast UI
        -   [x] Select UI
        -   [x] Button
        -   [x] TypeAhead and select UI
    -   ## [] state & logic
-   [x] CD to azure
    -   [x] creating and configuting azur account.
    -   [x] Github Action config.
    -   [x] automatic deploy to AZURE static site when commit in prod

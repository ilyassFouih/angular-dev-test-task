import { ForecastTableConfig, FORECAST_TYPE } from "@weather-forcast/core/models";

export const FORECAST_TABLE_MOCK:ForecastTableConfig={
	city:{
		country:"America",
		name:"Chicago",
		tempValue:284.07
	},
	tableType:FORECAST_TYPE.DAILY,
	tempColumns:[
		{
			colTemp:279.79,
			colValue:"Today",
		},
		{
			colTemp:279.79,
			colValue:"Tomorrow",
		},
		{
			colTemp:279.79,
			colValue:"Wendsday",
		},
		{
			colTemp:279.79,
			colValue:"Thursday",
		},
		{
			colTemp:279.79,
			colValue:"Friday",
		},
		{
			colTemp:279.79,
			colValue:"Saturday",
		},
		{
			colTemp:279.79,
			colValue:"Sunday",
		},
	]
}
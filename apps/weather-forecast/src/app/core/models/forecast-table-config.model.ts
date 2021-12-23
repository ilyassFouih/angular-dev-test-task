type CityColumn={
	tempValue:number
	country:string
	name:string
}
type TempColumns={
	colValue:string
	colTemp:number
}

export enum FORECAST_TYPE{
	DAILY="Daily",
	HOURLY="Hourly",
}
export interface ForecastTableConfig {
	city:CityColumn
	tempColumns:TempColumns[]
	tableType:FORECAST_TYPE
}


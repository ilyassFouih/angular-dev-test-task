type CityColumn={
	tempValue:number
	country:string
	name:string
}
type TempColumns={
	colValue:string
	colTemp:number
}
export interface ForecastTableConfig {
	city:CityColumn
	tempColumns:TempColumns[]
	tableType:"DAILY"|"HOURLY"
}


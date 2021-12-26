import { CitiesModel } from "@weather-forcast/core/models";
export enum CitiesStateStatus{
	LOADING="LOADING_CITIES",
	SUCCESS="FOUND_CITIES",
	NO_CITY_FOUND="NO_CITY_FOUND",
	INIT="INIT_STATE"
}
export interface CitiesState{
	cities:CitiesModel[]
	status:CitiesStateStatus
	errorMsg:string
}
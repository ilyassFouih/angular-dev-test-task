import { CitiesModel } from "@weather-forcast/core/models";
export enum CitiesStateStatus{
	LOADING,
	ERROR,
	SUCCESS,
	INIT
}
export interface CitiesState{
	cities:CitiesModel[]
	status:CitiesStateStatus
	errorMsg:string
}
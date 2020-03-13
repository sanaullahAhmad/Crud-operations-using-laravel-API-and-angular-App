import { Injectable } from '@angular/core';
// import { Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class CitiesService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getCities(page){
    let url = this.environmentService.setApiServiceWithPage('cities', page)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  getCitiesById($id){
    let url = this.environmentService.setApiServiceById('cities', $id)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  addCities(citiesData){
    let url = this.environmentService.setApiService('cities')
    return this._http.post(url, citiesData)
        .map(res=> res)
        .catch(this.handleError)
  }

  updateCities(citiesData){
    let url = this.environmentService.setApiServiceById('cities', citiesData.id)
    return this._http.put(url, citiesData)
        .map(res=> res)
        .catch(this.handleError)
  }

  deleteCities($id){
    let url = this.environmentService.setApiServiceById('cities', $id)
    return this._http.delete(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  private handleError (error: HttpErrorResponse | any) {
    let errMsg: string;
    errMsg = error.error
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

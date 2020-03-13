import { Injectable } from '@angular/core';
// import { Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class CountriesService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getCountries(page){
    let url = this.environmentService.setApiServiceWithPage('countries', page)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  getCountriesById($id){
    let url = this.environmentService.setApiServiceById('countries', $id)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  addCountries(countriesData){
    let url = this.environmentService.setApiService('countries')
    return this._http.post(url, countriesData)
        .map(res=> res)
        .catch(this.handleError)
  }

  updateCountries(countriesData){
    let url = this.environmentService.setApiServiceById('countries', countriesData.id)
    return this._http.put(url, countriesData)
        .map(res=> res)
        .catch(this.handleError)
  }

  deleteCountries($id){
    let url = this.environmentService.setApiServiceById('countries', $id)
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

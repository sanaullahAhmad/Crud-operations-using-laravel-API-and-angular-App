import { Injectable } from '@angular/core';
// import { Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class ReportsService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getReports(page){
    let url = this.environmentService.setApiServiceWithPage('reports', page)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  getReportsById($id){
    let url = this.environmentService.setApiServiceById('reports', $id)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  addReports(reportsData){
    let url = this.environmentService.setApiService('reports')
    return this._http.post(url, reportsData)
        .map(res=> res)
        .catch(this.handleError)
  }

  updateReports(reportsData){
    let url = this.environmentService.setApiServiceById('reports', reportsData.id)
    return this._http.put(url, reportsData)
        .map(res=> res)
        .catch(this.handleError)
  }

  deleteReports($id){
    let url = this.environmentService.setApiServiceById('reports', $id)
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

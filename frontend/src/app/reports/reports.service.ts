import { Injectable } from '@angular/core';
// import { Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class ProductsService {

  constructor(
    private _http: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getProducts(page){
    let url = this.environmentService.setApiServiceWithPage('products', page)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  getProductsById($id){
    let url = this.environmentService.setApiServiceById('products', $id)
    return this._http.get(url)
        .map(res=> res)
        .catch(this.handleError)
  }

  addProducts(productsData){
    let url = this.environmentService.setApiService('products')
    return this._http.post(url, productsData)
        .map(res=> res)
        .catch(this.handleError)
  }

  updateProducts(productsData){
    let url = this.environmentService.setApiServiceById('products', productsData.id)
    return this._http.put(url, productsData)
        .map(res=> res)
        .catch(this.handleError)
  }

  deleteProducts($id){
    let url = this.environmentService.setApiServiceById('products', $id)
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

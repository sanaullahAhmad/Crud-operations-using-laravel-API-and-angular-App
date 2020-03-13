import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductsService} from "./../products.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {

  	productsData = {isbn:'', title:'', author:'', description:'', image:''}
  	message = ''
  	constructor(
  		private productsService: ProductsService, 
  		private router: Router,
  		private route: ActivatedRoute,
  		private location: Location,
      private spinnerService: Ng4LoadingSpinnerService,
      private notificationService: NotificationService
  	) { }

  ngOnInit() {
  	this.getProductsById()
  }
  getProductsById(){
    this.spinnerService.show();
  	const $id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProductsById($id)
      .subscribe((response) => {
        this.productsData = response.data
        this.spinnerService.hide();
    })
  }

  updateProducts() {
    this.spinnerService.show();
  	this.productsService.updateProducts(this.productsData)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Updated.')
        this.router.navigate(['products']);   
      });
  }
}

import { Component,ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { ProductsService } from "./../products.service";


@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.css']
})
export class ProductsIndexComponent implements OnInit {
  @ViewChild('ProductsImageModal') ProductsImageModal: ModalDirective;
  p: number = 1;
  products = [];
  errMesg: any;
  totalRecords = 0;
  pageSize = 5;
  productsImage = '';

  constructor(
    private spinnerService: Ng4LoadingSpinnerService, 
    private productsService: ProductsService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts(){
    this.spinnerService.show();
    this.productsService.getProducts(1)
      .subscribe((response) => {
        this.products = response.data.data
        this.totalRecords =response.data.total
        this.spinnerService.hide();
      });
  }

  getPage($page)
  {
    this.spinnerService.show();
    this.productsService.getProducts($page)
      .subscribe((response) => {
        this.products = response.data.data
        this.totalRecords =response.data.total
        this.p = $page
        this.spinnerService.hide();
      });
  }

  deleteProducts($id){
    this.spinnerService.show();
    this.productsService.deleteProducts($id)
      .subscribe(data => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Deleted.')
        this.getProducts()
    })
  }

  viewImage(image){
    this.productsImage = image
    this.ProductsImageModal.show()
  }

}

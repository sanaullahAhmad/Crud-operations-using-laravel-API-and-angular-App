import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from "./../products.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  productsData = {isbn:'', title:'', author:'', description:'', image:''}
  message = ''
  selectFiles: File = null;
  
  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private productsService: ProductsService, 
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  onFileSelected(event)
  {
    this.selectFiles = <File>event.target.files[0]
  }

  addProducts() {
      this.spinnerService.show();
      let fd = new FormData();
      for(let key in this.productsData){
          fd.append(key, this.productsData[key])
      }
      if(this.selectFiles != null)
      {
         fd.append('image',this.selectFiles,this.selectFiles.name)
      }
      this.productsService.addProducts(fd)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Added.')
        this.router.navigateByUrl('products');   
      });
  }

}

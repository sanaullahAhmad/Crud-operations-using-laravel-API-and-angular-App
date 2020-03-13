import { Component,ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { CountriesService } from "./../countries.service";


@Component({
  selector: 'app-countries-index',
  templateUrl: './countries-index.component.html',
  styleUrls: ['./countries-index.component.css']
})
export class CountriesIndexComponent implements OnInit {
  @ViewChild('CountriesImageModal') CountriesImageModal: ModalDirective;
  p: number = 1;
  countries = [];
  errMesg: any;
  totalRecords = 0;
  pageSize = 5;
  countriesImage = '';

  constructor(
    private spinnerService: Ng4LoadingSpinnerService, 
    private countriesService: CountriesService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  	this.getCountries();
  }

  getCountries(){
    this.spinnerService.show();
    this.countriesService.getCountries(1)
      .subscribe((response) => {
        this.countries = response.data.data
        this.totalRecords =response.data.total
        this.spinnerService.hide();
      });
  }

  getPage($page)
  {
    this.spinnerService.show();
    this.countriesService.getCountries($page)
      .subscribe((response) => {
        this.countries = response.data.data
        this.totalRecords =response.data.total
        this.p = $page
        this.spinnerService.hide();
      });
  }

  deleteCountries($id){
    this.spinnerService.show();
    this.countriesService.deleteCountries($id)
      .subscribe(data => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Deleted.')
        this.getCountries()
    })
  }

  viewImage(image){
    this.countriesImage = image
    this.CountriesImageModal.show()
  }

}

import { Component,ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { CitiesService } from "./../cities.service";


@Component({
  selector: 'app-cities-index',
  templateUrl: './cities-index.component.html',
  styleUrls: ['./cities-index.component.css']
})
export class CitiesIndexComponent implements OnInit {
  @ViewChild('CitiesImageModal') CitiesImageModal: ModalDirective;
  p: number = 1;
  cities = [];
  errMesg: any;
  totalRecords = 0;
  pageSize = 5;
  citiesImage = '';

  constructor(
    private spinnerService: Ng4LoadingSpinnerService, 
    private citiesService: CitiesService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  	this.getCities();
  }

  getCities(){
    this.spinnerService.show();
    this.citiesService.getCities(1)
      .subscribe((response) => {
        this.cities = response.data.data
        this.totalRecords =response.data.total
        this.spinnerService.hide();
      });
  }

  getPage($page)
  {
    this.spinnerService.show();
    this.citiesService.getCities($page)
      .subscribe((response) => {
        this.cities = response.data.data
        this.totalRecords =response.data.total
        this.p = $page
        this.spinnerService.hide();
      });
  }

  deleteCities($id){
    this.spinnerService.show();
    this.citiesService.deleteCities($id)
      .subscribe(data => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Deleted.')
        this.getCities()
    })
  }

  viewImage(image){
    this.citiesImage = image
    this.CitiesImageModal.show()
  }

}

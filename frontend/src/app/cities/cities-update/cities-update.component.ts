import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CitiesService} from "./../cities.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';

@Component({
  selector: 'app-cities-update',
  templateUrl: './cities-update.component.html',
  styleUrls: ['./cities-update.component.css']
})
export class CitiesUpdateComponent implements OnInit {

  	citiesData = {isbn:'', title:'', author:'', description:'', image:''}
  	message = ''
  	constructor(
  		private citiesService: CitiesService, 
  		private router: Router,
  		private route: ActivatedRoute,
  		private location: Location,
      private spinnerService: Ng4LoadingSpinnerService,
      private notificationService: NotificationService
  	) { }

  ngOnInit() {
  	this.getCitiesById()
  }
  getCitiesById(){
    this.spinnerService.show();
  	const $id = this.route.snapshot.paramMap.get('id');
    this.citiesService.getCitiesById($id)
      .subscribe((response) => {
        this.citiesData = response.data
        this.spinnerService.hide();
    })
  }

  updateCities() {
    this.spinnerService.show();
  	this.citiesService.updateCities(this.citiesData)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Updated.')
        this.router.navigate(['cities']);   
      });
  }
}

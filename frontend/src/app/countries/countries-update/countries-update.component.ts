import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CountriesService} from "./../countries.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';

@Component({
  selector: 'app-countries-update',
  templateUrl: './countries-update.component.html',
  styleUrls: ['./countries-update.component.css']
})
export class CountriesUpdateComponent implements OnInit {

  	countriesData = {isbn:'', title:'', author:'', description:'', image:''}
  	message = ''
  	constructor(
  		private countriesService: CountriesService, 
  		private router: Router,
  		private route: ActivatedRoute,
  		private location: Location,
      private spinnerService: Ng4LoadingSpinnerService,
      private notificationService: NotificationService
  	) { }

  ngOnInit() {
  	this.getCountriesById()
  }
  getCountriesById(){
    this.spinnerService.show();
  	const $id = this.route.snapshot.paramMap.get('id');
    this.countriesService.getCountriesById($id)
      .subscribe((response) => {
        this.countriesData = response.data
        this.spinnerService.hide();
    })
  }

  updateCountries() {
    this.spinnerService.show();
  	this.countriesService.updateCountries(this.countriesData)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Updated.')
        this.router.navigate(['countries']);   
      });
  }
}

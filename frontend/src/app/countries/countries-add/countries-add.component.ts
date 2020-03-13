import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CountriesService} from "./../countries.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
@Component({
  selector: 'app-countries-add',
  templateUrl: './countries-add.component.html',
  styleUrls: ['./countries-add.component.css']
})
export class CountriesAddComponent implements OnInit {

  countriesData = {isbn:'', title:'', author:'', description:'', image:''}
  message = ''
  selectFiles: File = null;
  
  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private countriesService: CountriesService, 
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  onFileSelected(event)
  {
    this.selectFiles = <File>event.target.files[0]
  }

  addCountries() {
      this.spinnerService.show();
      let fd = new FormData();
      for(let key in this.countriesData){
          fd.append(key, this.countriesData[key])
      }
      if(this.selectFiles != null)
      {
         fd.append('image',this.selectFiles,this.selectFiles.name)
      }
      this.countriesService.addCountries(fd)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Added.')
        this.router.navigateByUrl('countries');   
      });
  }

}

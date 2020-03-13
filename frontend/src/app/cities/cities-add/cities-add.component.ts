import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CitiesService} from "./../cities.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
@Component({
  selector: 'app-cities-add',
  templateUrl: './cities-add.component.html',
  styleUrls: ['./cities-add.component.css']
})
export class CitiesAddComponent implements OnInit {

  citiesData = {isbn:'', title:'', author:'', description:'', image:''}
  message = ''
  selectFiles: File = null;
  
  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private citiesService: CitiesService, 
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  onFileSelected(event)
  {
    this.selectFiles = <File>event.target.files[0]
  }

  addCities() {
      this.spinnerService.show();
      let fd = new FormData();
      for(let key in this.citiesData){
          fd.append(key, this.citiesData[key])
      }
      if(this.selectFiles != null)
      {
         fd.append('image',this.selectFiles,this.selectFiles.name)
      }
      this.citiesService.addCities(fd)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Added.')
        this.router.navigateByUrl('cities');   
      });
  }

}

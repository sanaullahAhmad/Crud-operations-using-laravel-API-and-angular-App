import { Component,ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { ReportsService } from "./../reports.service";


@Component({
  selector: 'app-reports-index',
  templateUrl: './reports-index.component.html',
  styleUrls: ['./reports-index.component.css']
})
export class ReportsIndexComponent implements OnInit {
  @ViewChild('ReportsImageModal') ReportsImageModal: ModalDirective;
  p: number = 1;
  reports = [];
  errMesg: any;
  totalRecords = 0;
  pageSize = 5;
  reportsImage = '';

  constructor(
    private spinnerService: Ng4LoadingSpinnerService, 
    private reportsService: ReportsService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  	this.getReports();
  }

  getReports(){
    this.spinnerService.show();
    this.reportsService.getReports(1)
      .subscribe((response) => {
        this.reports = response.data.data
        this.totalRecords =response.data.total
        this.spinnerService.hide();
      });
  }

  getPage($page)
  {
    this.spinnerService.show();
    this.reportsService.getReports($page)
      .subscribe((response) => {
        this.reports = response.data.data
        this.totalRecords =response.data.total
        this.p = $page
        this.spinnerService.hide();
      });
  }

  deleteReports($id){
    this.spinnerService.show();
    this.reportsService.deleteReports($id)
      .subscribe(data => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Deleted.')
        this.getReports()
    })
  }

  viewImage(image){
    this.reportsImage = image
    this.ReportsImageModal.show()
  }

}

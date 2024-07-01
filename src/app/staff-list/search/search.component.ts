import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/Service/http-service.service';
import { MCode } from 'src/app/Model/mcode.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  jobTitles: MCode[] = [];

  constructor(private jobTitleService: HttpServiceService) {}

  ngOnInit() {
    this.getJobTitles();
  }

  getJobTitles() {
    this.jobTitleService.getJobTitles().subscribe(
      jobTitles => {
        this.jobTitles = jobTitles;
      },
      error => {
        console.error('無法獲取職稱列表:', error);
      }
    );
  }

  search(){

  }
}

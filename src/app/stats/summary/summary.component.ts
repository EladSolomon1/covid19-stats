import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/stats/stats.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary:any;
  isLoading:boolean;
  constructor(private statsService:StatsService) {}

  ngOnInit() {
    this.isLoading=true;
    this.statsService.getSummary();
    this.statsService.summary.subscribe(res=>{
      this.summary=res;
      this.isLoading=false;
    })
  }

}

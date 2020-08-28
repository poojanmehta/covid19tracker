import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-display-all-data',
  templateUrl: './display-all-data.component.html',
  styleUrls: ['./display-all-data.component.css']
})
export class DisplayAllDataComponent implements OnInit {

  constructor(private dataService: CovidDataService) { }

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(
      (data: any[]) => {
        console.log(data);
      }
    );
  }

}

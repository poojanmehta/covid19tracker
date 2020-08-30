import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { StateData } from '../covidState'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all-data',
  templateUrl: './display-all-data.component.html',
  styleUrls: ['./display-all-data.component.css']
})
export class DisplayAllDataComponent implements OnInit {

  covidData: StateData[] = [];
  displayedColumns: string[] = ['state', 'active', 'recovered', 'deceased', 'increament', 'total'];
  dataSource = new MatTableDataSource();
  activeColor = 'rgb(190,36,36)';
  deathsColor = 'rgb(116,112,13)';
  recoveredColor = 'rgb(20,93,10)';
  covidStateData: StateData;
  lastDate: Date;
  isSpin = false;
  passStateData: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dataService: CovidDataService, private route: Router) { }

  ngOnInit(): void {
    this.isSpin = true;
    this.dataService.getAllData().subscribe(
      (data: any) => {
        console.log(data);
        this.covidData = data.statewise;
        console.log(this.covidData);
        this.covidData.splice(0, 1);
        this.dataSource.data = this.covidData;
        this.dataSource.paginator = this.paginator;
        this.covidStateData = this.covidData[0];
        this.createDate();
        this.isSpin = false;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createDate() {
    // tslint:disable-next-line: one-variable-per-declaration
    let month, date, year, fullyear;
    month = this.covidStateData.lastupdatedtime.substr(3, 3);
    date = this.covidStateData.lastupdatedtime.substr(0, 3);
    year = this.covidStateData.lastupdatedtime.substr(6, 4);
    fullyear = month + date + year;
    this.lastDate = new Date(fullyear);
  }

  openStateData(stateRow: StateData) {
    this.route.navigate(['/statedata', stateRow.state]);
  }
}

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StateData } from '../../covidState';
import { MatTableDataSource } from '@angular/material/table';
import { CovidDataService } from 'src/app/covid-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { DistrictData } from "./destrictData";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-state-data',
  templateUrl: './display-state-data.component.html',
  styleUrls: ['./display-state-data.component.css']
})
export class DisplayStateDataComponent implements OnInit {

  state: string;
  covidDistrictData: DistrictData[] = [];
  displayedColumns: string[] = ['district', 'active', 'recovered', 'deceased', 'increament', 'total'];
  dataSource = new MatTableDataSource();
  activeColor = 'rgb(190,36,36)';
  deathsColor = 'rgb(116,112,13)';
  recoveredColor = 'rgb(20,93,10)';
  lastDate: Date;
  isSpin = false;
  covidData: StateData[] = [];
  covidStateData: StateData;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dataService: CovidDataService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isSpin = true;
    this.state = this.actRoute.snapshot.params['state'];
    this.dataService.getDistrictData().subscribe(
      (data: any[]) => {
        console.log(data);
        let i = 0;
        // tslint:disable-next-line: forin
        for (const key in data[this.state].districtData) {
          this.covidDistrictData.push(data[this.state].districtData[key]);
          this.covidDistrictData[i].district = key;
          i++;
        }
        console.log(this.covidDistrictData);
        this.dataSource.data = this.covidDistrictData;
        this.dataSource.paginator = this.paginator;
        this.getAllDistrictData();
      }
    );
  }

  getAllDistrictData() {
    this.dataService.getAllData().subscribe(
      (data: any) => {
        this.covidData = data.statewise;
        console.log(this.covidData);
        for (const item of this.covidData) {
          if (item.state === this.state) {
            this.covidStateData = item;
            this.createDate();
          }
        }
      });
  }

  createDate() {
    // tslint:disable-next-line: one-variable-per-declaration
    let month, date, year, fullyear;
    month = this.covidStateData.lastupdatedtime.substr(3, 3);
    date = this.covidStateData.lastupdatedtime.substr(0, 3);
    year = this.covidStateData.lastupdatedtime.substr(6, 4);
    fullyear = month + date + year;
    this.lastDate = new Date(fullyear);
    this.isSpin = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

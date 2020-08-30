import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  private covidURL = 'https://api.covid19india.org/data.json';
  private districtUrl = 'https://api.covid19india.org/state_district_wise.json';

  constructor(private _http: HttpClient) { }

  getAllData() {
    return this._http.get(this.covidURL);
  }

  getDistrictData() {
    return this._http.get(this.districtUrl);
  }

}

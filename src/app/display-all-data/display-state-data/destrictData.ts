import { DeltaData } from './deltadeDistrictData';

export class DistrictData {
  constructor(
    public district: string,
    public notes: string,
    public active: number,
    public confirmed: number,
    public deceased: number,
    public recovered: number,
    public deltaData: DeltaData
  ) { }
}

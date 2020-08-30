export class StateData {
  constructor(
    public active: number,
    public confirmed: number,
    public deaths: number,
    public deltaconfirmed: number,
    public deltadeaths: number,
    public deltarecovered: number,
    public lastupdatedtime: string,
    public migratedother: number,
    public recovered: number,
    public state: string,
    public statecode: string,
    public statenotes: string
  ) { }
}

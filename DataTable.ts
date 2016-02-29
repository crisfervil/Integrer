export class DataTable{
  rows:Array<any>=[];

  constructor(rows?:Array<any>){
    if(rows!==undefined){
        this.rows=rows;
      }
  }
}

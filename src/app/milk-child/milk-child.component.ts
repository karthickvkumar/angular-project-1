import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-milk-child',
  templateUrl: './milk-child.component.html',
  styleUrls: ['./milk-child.component.css']
})
export class MilkChildComponent implements OnInit {

  @Input('content') information : string;

  @Output() rowData = new EventEmitter();

  listDate : any = [
    {
      name : 'Moch',
      crime: '0'
    },
    {
      name : 'Milk',
      crime: '100'
    },
    {
      name : 'Matcha',
      crime: '20'
    },
  ]

  filterData : any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.filterData = this.listDate.filter((value, index) => {
      return value.name.includes(this.information);
    })
  }

  onClickRow(row){
    console.log(row)
    this.rowData.emit(row);
  }

}

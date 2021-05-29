import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moch-parent',
  templateUrl: './moch-parent.component.html',
  styleUrls: ['./moch-parent.component.css']
})
export class MochParentComponent implements OnInit {

  textMessage : string = "";
  duplicateMessage : string = "";
  selectedCharacter : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.duplicateMessage = this.textMessage;
  }

  onRecived(value : any){
    console.log(value)
    this.selectedCharacter = value.name;
  }

}

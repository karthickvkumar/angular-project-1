import { Component, OnInit } from '@angular/core';
import { HeaderModel } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  message : string = "This is a Header Component";

  userData : HeaderModel.UserData = {
    username : "sdfdsf",
    password : 1223
  }

  address : HeaderModel.Address = {
    doorNo: 22,
    streetName : "sdfsdf",
    area: "sdfdsf",
    city: "sdfsdf"
  }

  student : HeaderModel.Student = {
    firstName : 'sddsf',
    lastName : 'sdfdsf',
    quaterlyMark : {
      english : 85,
      tamil : 78,
      maths: 98
    },
    halfMark : {
      english : 85,
      tamil : 78,
      maths: 98
    },
    annualMark : {
      english : 85,
      tamil : 78,
      maths: 98
    },
  }

  scoreList : number[] = [58,97,75,124]

  studentList : HeaderModel.StudentList[] = [
    {
      name : 'sdf',
      age: 20
    },
    {
      name : 'sdf',
      age: 20
    },
    {
      name : 'sdf',
      age: 20
    },
    {
      name : 'sdf',
      age: 20
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

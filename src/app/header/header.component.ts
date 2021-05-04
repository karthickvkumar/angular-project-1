import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

interface UserData{
  username : string;
  password : number;
}

interface Address{
  doorNo : number;
  streetName : string;
  area : string;
  city : string;
}

interface Student{
  firstName : string;
  lastName : string;
  quaterlyMark : Mark;
  halfMark : Mark;
  annualMark : Mark;
}

interface Mark{
  english : number;
  tamil : number;
  maths: number;
}

interface StudentList{
  name : string;
  age : number;
}

export class HeaderComponent implements OnInit {

  message : string = "This is a Header Component";

  userData : UserData = {
    username : "sdfdsf",
    password : 1223
  }

  address : Address = {
    doorNo: 22,
    streetName : "sdfsdf",
    area: "sdfdsf",
    city: "sdfsdf"
  }

  student : Student = {
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

  studentList : StudentList[] = [
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

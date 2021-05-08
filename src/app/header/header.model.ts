export namespace HeaderModel {

  export interface UserData{
    username : string;
    password : number;
  }

  export interface Address{
    doorNo : number;
    streetName : string;
    area : string;
    city : string;
  }

  export interface Student{
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

  export interface StudentList{
    name : string;
    age : number;
  }

}

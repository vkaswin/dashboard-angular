import { Component, OnInit } from '@angular/core';
import * as Types from './register.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  candidatesData:Types.Model.Register[] = []

  registerData : Types.Model.Register = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    dob : '',
    address : '',
    gender : '',
    hobbies : [],
    state : ''
  }

  errorHandle : Types.Model.ErrorHandle = {
    firstName : false,
    lastName : false,
    email : false,
    password : false,
    dob : false,
    address : false,
    gender : false,
    hobbies : false,
    state : false
  }

  constructor() { }

  ngOnInit(): void {
  }
  onFocus(event){
    this.errorHandle[event.target.name] = false;
  }
  onBlur(event){
    this.errorHandle[event.target.name] = this.registerData[event.target.name] == '' ? true : false;
  }
  onSubmit(){
    for(let key in this.errorHandle){
      this.errorHandle[key] = this.registerData[key] == "" ? true : false;
    }
    this.errorHandle.hobbies = this.registerData.hobbies.length == 0 ? true : false;
    if(this.registerData.firstName != '' && this.registerData.lastName != '' && this.registerData.email != '' && this.registerData.password != '' && this.registerData.dob != '' && this.registerData.address != '' && this.registerData.state != '' && this.registerData.hobbies.length != 0 && this.registerData.gender != ''){
      this.candidatesData.push(this.registerData);
      this.registerData = {
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        dob : '',
        address : '',
        gender : '',
        hobbies : [],
        state : ''
      }
    }
  }
  onChange(event){
    if(event.target.checked){
      this.registerData.hobbies.push(event.target.value);
    }
    else{
      let index = this.registerData.hobbies.findIndex((value)=>{
        return value == event.target.value;
      })
      this.registerData.hobbies.splice(index,1);
    }
  }
}

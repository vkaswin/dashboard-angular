import { Component, OnInit } from '@angular/core';
import * as Types from './model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeData:Types.Model.EmployeeModel[] = [];
  data:Types.Model.EmployeeModel = {
    name : '',
    role : '',
    company_name : '',
    location : '',
  }
  temp_data:Types.Model.EmployeeModel = {
    name : '',
    role : '',
    company_name : '',
    location : ''
  }
  displayText:boolean[] = [];
  displayButton:boolean[]=[];
  changeClass:boolean[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.employeeData.push(this.data);
    this.displayText.push(true);
    this.displayButton.push(true);
    this.changeClass.push(false);
    this.data = {
      name : '',
      role : '',
      company_name : '',
      location : ''
    }
  }
  onDelete(index){
    this.employeeData.splice(index,1);
  }
  onEdit(index){
    this.displayText.fill(true);
    this.displayText[index] = false;
    this.displayButton.fill(true);
    this.displayButton[index] = false;
    this.temp_data.name = this.employeeData[index].name;
    this.temp_data.role = this.employeeData[index].role;
    this.temp_data.company_name = this.employeeData[index].company_name;
    this.temp_data.location = this.employeeData[index].location;
    this.changeClass.fill(false);
    this.changeClass[index] = true;
  }
  onSave(index){
  if(this.temp_data.name!=this.employeeData[index].name){
    this.employeeData[index].name = this.temp_data.name;
  }
  if(this.temp_data.role!=this.employeeData[index].role){
    this.employeeData[index].role = this.temp_data.role;
  }
  if(this.temp_data.company_name!=this.employeeData[index].company_name){
    this.employeeData[index].company_name = this.temp_data.company_name;
  }
  if(this.temp_data.location!=this.employeeData[index].location){
    this.employeeData[index].location = this.temp_data.location;
  }
    this.temp_data = {
      name : '',
      role : '',
      company_name : '',
      location : ''
    }
    this.displayText.fill(true);
    this.displayButton[index] = !this.displayButton[index];
    this.changeClass.fill(false);
  }
  onCancel(index){
    this.displayButton[index] = !this.displayButton[index];
    this.displayText.fill(true);
    this.changeClass.fill(false);  
  }
}

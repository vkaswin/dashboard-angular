import { Component, OnInit } from '@angular/core';
import { ApiService }  from '../api.service';
import * as Types from './login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  products:any = []

  login:Types.Model.LoginModel = {
    username : '',
    password : ''
    }
  constructor(private api : ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    this.router.navigateByUrl('/register');
  }

  loadApi(){
    this.api.getApi().subscribe((response:any)=>{
      this.products = response;
      console.log(this.products)
    },(error:any)=>{

    })
  }
}

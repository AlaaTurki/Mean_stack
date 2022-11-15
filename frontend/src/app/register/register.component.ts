import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  registerUser(user:any)
  {
    this.apiService.registerUser(user);
    console.log(user);

  }

  //isRegistered:boolean=false;
  //registerUser(user:any)
  //{
    //this.isRegistered=true;
    //console.log(user);
  //}
  


  



}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) { }
  registerUser(user:any){
    this.http.post('http://localhost:5000/register',user).subscribe({
      next: data => {
        console.log(data);
      }
    })
  }
  loginUser(user:any){
    this.http.post('http://localhost:3000/login',user).subscribe(res=>{
    })
  }
}

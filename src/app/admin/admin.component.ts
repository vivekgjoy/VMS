import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 public loginForm :FormGroup;
  
  constructor(private router:Router, private http:HttpClient, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:[''],
        password:['']
      })

  }

  gotoDashboard(){
    this.router.navigateByUrl('/home')
  }

  login(){
    this.http.get<any>("http://localhost:9080/api/get")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("User not Found !!")
      }
    }, err=>{
      alert("Somthing went wrong...!")
    })
  }


}

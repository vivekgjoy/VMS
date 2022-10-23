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
      // let response = this.http.get("http://localhost:9080/api/get");
      // response.subscribe((data)=>console.log(data));
      this.loginForm = this.formBuilder.group({
        email:[''],
        password:['']
      })
  
      // this.myForm = new FormGroup({
      //   "email" : new FormControl("", [Validators.required, Validators.email]),
      //   "password" : new FormControl("", [Validators.required, Validators.maxLength(12),  Validators.minLength(8)]),
      // })

      // this.myForm = this.formBuilder.group({
      //   email:['',Validators.required],
      //   password:['',Validators.required]
      // })

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

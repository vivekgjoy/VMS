import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    console.log('Hi vivek');
    this.registerForm = this.formBuilder.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    password:['']
    }) 
  }
  register(){
    this.http.post<any>("http://localhost:9080/api/saveuser", this.registerForm.value)
    .subscribe(res=>{
      alert("Sign Up Successfull...");
      this.registerForm.reset();
      this.router.navigate(['admin']);
    },err=>{
      alert("Something Went wrong")
    }
    )
  }
  

}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}


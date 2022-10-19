import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'VMS';
  
  logo="assets/logo3.jpg"

  myForm :FormGroup

  onSubmit(){

  }
  ngOnInit(){
    this.myForm = new FormGroup({
      "username"     : new FormControl("",Validators.required),
      "password" : new FormControl("", [Validators.required, Validators.maxLength(10),  Validators.minLength(10)]),
      "check"     :  new FormControl()
    })
  }
}


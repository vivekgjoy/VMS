import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
    
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  auth = 0;
  LogedIn():boolean{
    if (this.auth==0){
      return true;
    }else{
      return false;
    }
  }

  role = "Admin";
  isAdmin():boolean{
  if(this.role=="Admin"){
    return true;
  }else{
    return false;
  }
}
}

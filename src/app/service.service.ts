import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  registerDetail(userRegistration:{email:any, password:any}) : Observable<any> {
    console.log("Register customer...", userRegistration);
    return this.http.post("http://localhost:9080/save", userRegistration);
    
  }
}

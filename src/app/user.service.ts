import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
 baseUrl = 'http://192.168.1.14:8000/myapp/org';
 
  constructor(private http : HttpClient) { }
  
  adDep(userData : any): Observable <any>{
    return this.http.post(this.baseUrl , userData,{headers:this.httpHeaders});

  }
}

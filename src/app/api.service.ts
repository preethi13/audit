import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8000'

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      
    })
  };
  getAllDepartments(object): Observable<any>
  
   {console.log("bloody works");
    return this.http.post(`${this.baseurl}/api/postdepartment`, object);
   // return this.http.post(this.baseurl + '/api/postdepartment',object,
   //this.httpOptions);
    
  }
  
}

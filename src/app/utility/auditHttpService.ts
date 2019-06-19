import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuditHttpService {
    baseUrl = 'http://192.168.1.14:8000'
    constructor(private httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*'
        })
    };
    public getService(url: string): Observable<any> {
        return this.httpClient.get(url, this.httpOptions);
    }

    public httpPostService(url: string, data: any): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + url, data, this.httpOptions);
    }

    public deleteService(url: string, header: { key: string, value: string }[]): Observable<any> {
        header.forEach(headerElement => {
            this.httpOptions.headers = this.httpOptions.headers.set(headerElement.key, headerElement.value);
        });
        return this.httpClient.delete(url, this.httpOptions);
    }

    public getJSONWithMultipleCustomHeaders(url: string, header: { key: string, value: string }[]): Observable<any> {
        header.forEach(headerElement => {
            this.httpOptions.headers = this.httpOptions.headers.set(headerElement.key, headerElement.value);
        });
        return this.httpClient.get(url, this.httpOptions);
    }
}

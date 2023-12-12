import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    'providedIn' : 'root'
})

export class CustomHttpClient
{
    
    constructor(private _httpClient: HttpClient)
    {

    }
    public post(url:string,body:any): Observable<any>
    {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200' // Replace with your Angular app's URL
          });
        return this._httpClient.post(url,body,{headers:headers});
    }
    public get(url:string): Observable<any>
    {
        return this._httpClient.get(url);
    }
}


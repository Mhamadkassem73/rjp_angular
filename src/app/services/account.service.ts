import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomHttpClient } from "./custom-http-client.service";
import { api } from "../constant/const";
import { AccountView } from "../model/AccountView.model";
import { environment } from "src/environments/environment";

@Injectable({
    'providedIn' : 'root'
})

export class AccountService
{
    constructor(private _customHttpClient: CustomHttpClient,
        )
    {
    }
    public openAccount(accountData:AccountView): Observable<any>
    {

        console.log(accountData);
        return this._customHttpClient.post(environment.api+"Account",accountData);


    }
    public getInformationById(id:number): Observable<any>
    {
        return this._customHttpClient.get(environment.api+"information/?customerId="+id);
    }
    public getAllCustomers(): Observable<any>
    {
        return this._customHttpClient.get(environment.api+"Customer/getAllCustomers");
    }
}
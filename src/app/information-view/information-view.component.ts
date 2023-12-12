import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Infrormation } from '../model/infromation.model';
import { MatSnackBar } from "@angular/material/snack-bar";
import { AccountView } from '../model/AccountView.model';

@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.css']
})
export class InformationViewComponent implements OnInit {

  constructor(
    private _accountService: AccountService,
  ) { }
  informations!: Infrormation;

  ngOnInit(): void {

  }




  fetchAccountInfoFunction(id:any) {
    this._accountService.getInformationById(id).subscribe(response => {
      if (response) {

        console.log(response);
        this.informations = response['value'];
      }
    });
  }


}

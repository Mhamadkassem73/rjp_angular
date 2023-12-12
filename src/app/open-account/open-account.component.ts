import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AccountService } from '../services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { AccountView } from '../model/AccountView.model';
import { Customer } from '../model/customer.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  customers: Customer[] = [];
  @Output() changeDropDown = new EventEmitter<any>();
  formGroup!: FormGroup; // Declare formGroup property
  @ViewChild('selectBox', { static: false }) selectBox!: MatSelect;
  constructor(
    private _accountService: AccountService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.formGroup = this._formBuilder.group({
      CustomerId: ['', Validators.required],
      InitialCredit: ['', Validators.required],
    });

    this._accountService.getAllCustomers().subscribe(response => {
      if (response) {
        this.customers = response['value'];
      }
    });

  }



  onSelectionChange(event: any) {

    console.log(this.formGroup.value.CustomerId); 

    this.changeDropDown.emit(this.formGroup.value.CustomerId);
  }

  openAccount() {
    if (this.formGroup.invalid) {
      this._snackBar.open("CustomerI and Initial Credit are Required", "ok", {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        duration: 5000,
      });
      return;
    }

    const customerData: AccountView = {
      CustomerId: parseInt(this.formGroup.value.CustomerId),
      InitialCredit: parseFloat(this.formGroup.value.InitialCredit),
      Customers: []

    };
    this._accountService.openAccount(customerData).subscribe(response => {
      if (response) {
        console.log(response);
        this.changeDropDown.emit(this.formGroup.value.CustomerId);
      }
    });
  }
}

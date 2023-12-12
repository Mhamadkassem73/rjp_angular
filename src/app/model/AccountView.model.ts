import { Customer } from "./customer.model";

export interface AccountView {
    CustomerId: number,
    InitialCredit: number,
    Customers?: Customer[];
}
import { Transaction } from "./transaction.model";

export interface Infrormation {
    name: string,
    surname: string,
    balance:number,
    transactions:Transaction[]
}
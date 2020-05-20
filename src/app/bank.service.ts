import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BankService {
  userInputValue: number;

  account: any = {
    fname: "Elias",
    lname: "Telahun",
    age: 8,
    address: {
      street: "1234 street st",
      city: "San Diego",
      state: "CA",
      zip: 92108,
      country: "USA",
    },
    balance: 200.01,
    currency: "usd",
    transactions: [
      {
        date: new Date("5-01-2020"),
        type: "withdrawal",
        amount: 200.0,
        currency: "usd",
      },
      {
        date: new Date("02-02-2020"),
        type: "deposit",
        amount: 100.0,
        currency: "usd",
      },
      {
        date: new Date("03-03-2019"),
        type: "withdrawal",
        amount: 23.0,
        currency: "usd",
      },
    ],
  };
  constructor() {}
  addTransaction(type, amount) {
    this.account.transactions.push({
      date: Date.now(),
      type: type,
      amount: amount,
      currency: "usd",
    });
  }
}

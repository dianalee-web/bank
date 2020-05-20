import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BankService {
  userInputValue: number;

  account: any = {
    fname: "Jane",
    lname: "Robinson",
    age: 18,
    address: {
      street: "1234 street st",
      city: "city",
      state: "state",
      zip: 12345,
      country: "canada",
    },
    balance: 200.01,
    currency: "usd",
    transactions: [
      {
        date: "01-01-01",
        type: "withdrawal",
        amount: 200.0,
        currency: "usd",
      },
      {
        date: "02-02-02",
        type: "deposit",
        amount: 100.0,
        currency: "usd",
      },
      {
        date: "03-03-03",
        type: "withdrawal",
        amount: 2.0,
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

import { Component } from "@angular/core";
import { BankService } from "../bank.service";

@Component({
  selector: "app-atm",
  templateUrl: "./atm.component.html",
  styleUrls: ["./atm.component.css"],
})
export class AtmComponent {
  date = new Date();
  userInputValue: number;
  display = "";
  myAccount = this.bankService.account;
  transactionCompleted: boolean;
  constructor(public bankService: BankService) {}
  withdraw() {
    this.transactionCompleted = false;

    if (this.userInputValue > this.myAccount.balance) {
      alert("INSUFFICIENT FUNDS. Please re-enter $ amount.");
      this.display = "";
    } else {
      this.myAccount.balance -= this.userInputValue;
      this.myAccount.transactions.unshift({
        date: new Date(),
        type: "withdrawal",
        amount: this.userInputValue,
        currency: "usd",
      });
      this.userInputValue = "";
      this.display = `WTIHDRAW SUCCESS!`;
    }
  }
  deposit() {
    this.transactionCompleted = false;
    this.myAccount.balance += this.userInputValue;
    this.myAccount.transactions.unshift({
      date: new Date(),
      type: "deposit",
      amount: this.userInputValue,
      currency: "usd",
    });
    this.userInputValue = "";
    this.display = `Deposit SUCCESS! `;

    this.userInputValue = "";
  }
  getBalance() {
    this.transactionCompleted = false;
    this.display = `Current Balance: $ ${this.myAccount.balance}`;
    this.userInputValue = "";
  }
  displayTransactions() {
    this.display = "";
    this.transactionCompleted = true;
  }
}

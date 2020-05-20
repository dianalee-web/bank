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

  constructor(public bankService: BankService) {}
  withdraw() {
    this.myAccount.balance -= this.userInputValue;
    this.myAccount.transactions.unshift({
      date: new Date(),
      type: "withdrawal",
      amount: this.value,
      currency: "usd",
    });
    this.userInputValue = "";
    this.display = `WTIHDRAW SUCCESS! New Balance: $ ${this.myAccount.balance}`;
  }
  deposit() {
    this.myAccount.balance += this.userInputValue;
    this.myAccount.transactions.unshift({
      date: new Date(),
      type: "deposit",
      amount: this.value,
      currency: "usd",
    });
    this.userInputValue = "";
    this.display = `DEPOSIT SUCCESS! New Balance: $ ${this.myAccount.balance}`;

    this.userInputValue = "";
  }
  getBalance() {
    this.display = `CURRENT BALANCE: $ ${this.myAccount.balance}`;
    this.userInputValue = "";
  }
  displayTransactions() {}
}

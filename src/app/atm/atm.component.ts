import { Component } from "@angular/core";
import { BankService } from "../bank.service";

@Component({
  selector: "app-atm",
  templateUrl: "./atm.component.html",
  styleUrls: ["./atm.component.css"],
})
export class AtmComponent {
  transactionList = false;
  date = new Date();
  userInputValue: number;
  currentBalance = "";
  myAccount = this.bankService.account;

  constructor(public bankService: BankService) {}
  withdraw() {
    this.myAccount.balance -= this.userInputValue;
    alert(`WITHDRAW success! New Balance: ${this.myAccount.balance}`);
    this.userInputValue = "";
  }
  deposit() {
    this.myAccount.balance += this.userInputValue;

    alert(`DEPOSIT success! New Balance: ${this.myAccount.balance}`);
    this.value = "";
  }
  getBalance() {
    alert(this.myAccount.balance);
    this.currentBalance = this.myAccount.balance;
  }
  displayTransactions() {
    this.transactionList = true;
    this.transactionsList = "hello";
  }
}

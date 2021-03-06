import { Component } from "@angular/core";
import { BankService } from "../bank.service";

@Component({
  selector: "app-teller",
  templateUrl: "./teller.component.html",
  styleUrls: ["./teller.component.css"],
})
export class TellerComponent {
  myAccount = this.bankService.account;
  value;
  date = new Date();
  display = "";
  homescreen: boolean = true;
  transactionCompleted: boolean;
  constructor(public bankService: BankService) {}
  customerInfo() {
    this.display = ` Age: ${this.myAccount.age}`;
  }
  withdraw() {
    this.transactionCompleted = false;
    this.homescreen = false;
    this.myAccount.balance -= this.value;

    this.myAccount.transactions.unshift({
      date: new Date(),
      type: "withdrawal",
      amount: this.value,
      currency: "usd",
    });
    this.display = "Withdraw SUCCESS";
    this.value = "";
  }
  deposit() {
    this.transactionCompleted = false;
    this.homescreen = false;
    this.myAccount.balance += this.value;
    this.myAccount.transactions.unshift({
      date: new Date(),
      type: "deposit",
      amount: this.value,
      currency: "usd",
    });
    this.display = "Deposit SUCCESS";

    this.value = "";
  }
  //isHidden = false
  displayTransactions() {
    console.log(this.myAccount.transactions);
    this.display = "";
    this.transactionCompleted = true;
  }
}

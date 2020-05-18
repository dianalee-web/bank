import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {
  myAccount=this.bankService.account;
  value;
  date = new Date();
  constructor( public bankService: BankService) { }

  withdraw() {
    this.myAccount.balance -=this.value;
    alert(`WITHDRAW success! New Balance: ${this.myAccount.balance}` );
    this.value = '';
  }
  deposit() {
    this.myAccount.balance +=this.value;
    alert(`DEPOSIT success! New Balance: ${this.myAccount.balance}` );
    this.value = '';
  }
  displayTransactions(){
    alert('transactions')
  };
}

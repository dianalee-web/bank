import { Component } from '@angular/core';
import {router  } from './app.router'
import { BankService } from './bank.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bankName = 'Bank of San Diego';
  constructor(public bankService: BankService){};
  
  
  
}

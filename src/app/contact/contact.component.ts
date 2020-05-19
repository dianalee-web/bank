import { Component, OnInit, Input } from "@angular/core";

import { BankService } from "../bank.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  @Input() bankService: BankService;
  // myAccount= this.bankService.account;
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    alert(this.name);
  }
}

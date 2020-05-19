import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AtmComponent } from "./atm/atm.component";
import { TellerComponent } from "./teller/teller.component";

import { BankService } from "./bank.service";
import { router } from "./app.router";
import { NavComponent } from "./nav/nav.component";
import { ContactComponent } from "./contact/contact.component";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    ContactComponent,
    TestComponent,
  ],
  imports: [BrowserModule, router, FormsModule],
  providers: [BankService],
  bootstrap: [AppComponent],
})
export class AppModule {}

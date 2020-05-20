import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AtmComponent } from "./atm/atm.component";
import { TellerComponent } from "./teller/teller.component";

// import { BankService } from "./bank.service";
import { router } from "./app.router";
import { NavComponent } from "./nav/nav.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, router, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { AtmComponent } from "./atm/atm.component";
import { TellerComponent } from "./teller/teller.component";
import { ContactComponent } from "./contact/contact.component";
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
});
export const routes: Routes = [
  { path: "", redirectTo: "atm", pathMatch: "full" },
  { path: "atm", component: AtmComponent },
  { path: "teller", component: TellerComponent },
  { path: "contact", component: ContactComponent },
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);

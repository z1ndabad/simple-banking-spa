import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppHomeComponent } from './banking-spa/app-home/app-home.component';
import { AppTransferPanelComponent } from './banking-spa/app-transfer-panel/app-transfer-panel.component';
import { AccountService } from './banking-spa/services/account-service.service';

@NgModule({
  declarations: [AppComponent, AppHomeComponent, AppTransferPanelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

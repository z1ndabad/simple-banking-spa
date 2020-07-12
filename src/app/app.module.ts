import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/app-home/home.component';
import { AppTransferPanelComponent } from './components/app-transfer-panel/app-transfer-panel.component';
import { TransferPreviewComponent } from './components/transfer-preview/transfer-preview.component';
import { TransactionsSortContainerComponent } from './components/transactions-sort-container/transactions-sort-container.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppTransferPanelComponent,
    TransferPreviewComponent,
    TransactionsSortContainerComponent,
    TransactionListComponent
  ],
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

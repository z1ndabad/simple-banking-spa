import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/app-home/home.component';
import { AppTransferPanelComponent } from './components/app-transfer-panel/app-transfer-panel.component';
import { TransferPreviewComponent } from './components/transfer-preview/transfer-preview.component';
import { RecentTransactionsContainerComponent } from './components/recent-transactions-container/recent-transactions-container.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppTransferPanelComponent,
    TransferPreviewComponent,
    RecentTransactionsContainerComponent,
    TransactionListComponent,
    TransactionComponent
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

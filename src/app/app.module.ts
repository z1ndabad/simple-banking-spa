import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/app-home/home.component';
import { AppTransferPanelComponent } from './components/app-transfer-panel/app-transfer-panel.component';
import { TransferPreviewComponent } from './components/transfer-preview/transfer-preview.component';
import { TransactionsSortContainerComponent } from './components/transactions-sort-container/transactions-sort-container.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ModalModule } from './_modal';

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
    ReactiveFormsModule,
    HttpClientModule,
    SimplebarAngularModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

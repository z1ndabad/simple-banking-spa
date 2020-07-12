import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account-service.service';
import {
  TransferPanelData,
  TransferPreviewData
} from 'src/app/models/viewmodels';
import { BankAccountUpdate, Transaction } from 'src/app/models/bankaccount';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private accountService: AccountService) {}
  transferPanelData: TransferPanelData;
  transferPreviewData: TransferPreviewData;
  transactions: Transaction[];
  accountId = 1;

  ngOnInit(): void {
    this._updateViewData();
  }

  openTransferPreview(payload: TransferPreviewData): void {
    this.transferPreviewData = payload;
  }

  transferMoney(): void {
    this._updateDatabase({
      balance: this.transferPanelData.balance - this.transferPreviewData.amount,
      transactions: {
        data: [
          {
            amount: this.transferPreviewData.amount,
            categoryCode: '12345',
            merchant: this.transferPreviewData.to,
            transactionDate: 2020,
            transactionType: 'Online Transfer'
          },
          ...this.transactions
        ]
      }
    });
    this._updateViewData();
  }

  _updateDatabase(update: BankAccountUpdate): void {
    this.accountService.updateAccount(this.accountId, update).subscribe();
  }

  _updateViewData(): void {
    this.accountService.getAccount(this.accountId).subscribe((acc) => {
      this.transferPanelData = {
        accountNumber: acc.accountNumber,
        accountName: acc.accountName,
        balance: acc.balance
      };
      this.transactions = acc.transactions.data;
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/models/bankaccount';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent /*implements OnInit*/ {
  _transactionData: Transaction;
  @Input()
  set transactionData(data: Transaction) {
    this._transactionData = data;
  }

  //constructor() {}

  //ngOnInit(): void {}
}

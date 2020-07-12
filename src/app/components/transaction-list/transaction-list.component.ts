import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/models/bankaccount';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent /*implements OnInit*/ {
  transactions: Transaction[];

  @Input()
  set dataInput(data: Transaction[]) {
    if (data) {
      this.transactions = data;
    }
  }

  //constructor() {}
  //ngOnInit(): void {}
}

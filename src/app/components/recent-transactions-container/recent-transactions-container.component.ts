import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/models/bankaccount';

@Component({
  selector: 'app-recent-transactions-container',
  templateUrl: './recent-transactions-container.component.html',
  styleUrls: ['./recent-transactions-container.component.css']
})
export class RecentTransactionsContainerComponent /*implements OnInit*/ {
  transactions: Transaction[];

  @Input()
  set dataInput(data: Transaction[]) {
    if (data) {
      this.transactions = data;
    }
  }

  //ngOnInit(): void {}
}

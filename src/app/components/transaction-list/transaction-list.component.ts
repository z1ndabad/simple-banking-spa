import { Component, Input } from '@angular/core';
import {
  TransactionsPrintable,
  TransactionsSortable
} from 'src/app/models/viewmodels';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  transactions: TransactionsPrintable[];

  @Input()
  set dataInput(data: TransactionsSortable[]) {
    if (data) {
      this.transactions = data.map((item) => {
        const formattedDateArray = new Date(item.transactionDate)
          .toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })
          .split(' ');

        formattedDateArray.splice(1, 0, '. ');

        return {
          ...item,
          transactionDate: formattedDateArray.join(''),
          amount: item.amount.toFixed(2)
        };
      });
    }
  }
}

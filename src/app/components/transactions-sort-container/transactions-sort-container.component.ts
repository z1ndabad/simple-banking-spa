import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/models/bankaccount';
import orderBy from 'lodash/orderBy';
import { TransactionsSortable } from 'src/app/models/viewmodels';

@Component({
  selector: 'app-transactions-sort-container',
  templateUrl: './transactions-sort-container.component.html',
  styleUrls: ['./transactions-sort-container.component.css']
})
export class TransactionsSortContainerComponent implements OnInit {
  transactions: TransactionsSortable[];
  orderedTransactions: TransactionsSortable[];
  sortOrder: string;
  sortOrderView = {};
  sortAttributes = {
    date: { selected: 0 },
    merchant: { selected: 0 },
    amount: { selected: 0 }
  };

  viewAttributeMap = {
    merchant: 'beneficiary'
  };

  @Input()
  set dataInput(data: Transaction[]) {
    if (data) {
      this.transactions = data.map((item) => {
        return { ...item, amount: parseFloat(item.amount) };
      });
      console.log(this.transactions);
      this.sort('date');
    }
  }

  ngOnInit(): void {
    this.sortAttributes.date.selected = 1;
  }

  sort(attr: string): void {
    this.orderedTransactions = orderBy(this.transactions, [attr], 'asc');
  }

  keepOrder = (a, b): number => a;
}

import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/bankaccount';
import orderBy from 'lodash/orderBy';
import { TransactionsSortable } from 'src/app/models/viewmodels';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transactions-sort-container',
  templateUrl: './transactions-sort-container.component.html',
  styleUrls: ['./transactions-sort-container.component.css']
})
export class TransactionsSortContainerComponent {
  transactions: TransactionsSortable[];
  orderedTransactions: TransactionsSortable[];
  sortAscending = false;
  sortAttributes = {
    date: { selected: false },
    merchant: { selected: false },
    amount: { selected: false }
  };
  activeAttribute = 'date';

  viewAttributeMap = {
    merchant: 'beneficiary'
  };

  @Input()
  set dataInput(data: Transaction[]) {
    if (data) {
      this.transactions = data.map((item) => {
        return {
          ...item,
          amount: parseFloat(item.amount),
          date: new Date(item.transactionDate)
        };
      });
      this.orderedTransactions = this.transactions;
      this._sort(this.activeAttribute);
    }
  }

  constructor(private fb: FormBuilder) {}

  onKey(searchString: string): void {
    this.orderedTransactions = this.transactions.filter((transaction) => {
      return transaction.merchant
        .toLowerCase()
        .includes(searchString.toLowerCase());
    });
    this._sort(this.activeAttribute);
  }

  clickSort(attr: string): void {
    this._checkAscending(attr);
    this._sort(attr);
  }

  _sort(attr: string): void {
    this.orderedTransactions = orderBy(
      this.orderedTransactions,
      [attr],
      this.sortAscending ? 'asc' : 'desc'
    );
  }

  _checkAscending(attr: string): void {
    if (this.sortAttributes[attr].selected) {
      this.sortAscending
        ? (this.sortAscending = false)
        : (this.sortAscending = true);
    } else {
      Object.keys(this.sortAttributes).forEach((key) => {
        this.sortAttributes[key].selected = false;
      });
      this.sortAttributes[attr].selected = true;
    }
    this.activeAttribute = attr;
  }

  keepOrder = (a, b): number => a;
}

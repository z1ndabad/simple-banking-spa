import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {}

  private balance: number;

  getAccountNumber(id: number): Promise<number> {
    return this._getAccount(id).then((acc) => acc.accountNumber);
  }

  getBalance(id: number): Promise<number> {
    return this._getAccount(id).then((acc) => acc.balance);
  }

  _getAccount(id: number): Promise<BankAccount> {
    const endpoint = `api/accounts/${id}`;

    return this.http.get(endpoint).toPromise() as Promise<BankAccount>;
  }
}

export interface BankAccount {
  id: number;
  accountNumber: number;
  name: string;
  currency: string;
  balance: number;
  transactions: [Transaction];
}

interface Transaction {
  data: [TransactionData];
}

interface TransactionData {
  amount: number;
  categoryCode: string;
  merchant: string;
  merchantLogo: string;
  transactionDate: number;
  transactionType: string;
}

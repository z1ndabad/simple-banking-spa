export interface BankAccount {
  id: number;
  accountNumber: number;
  name: string;
  currency: string;
  balance: number;
  transactions: [Transaction];
}

export interface Transaction {
  data: [TransactionData];
}

export interface TransactionData {
  amount: number;
  categoryCode: string;
  merchant: string;
  merchantLogo: string;
  transactionDate: number;
  transactionType: string;
}

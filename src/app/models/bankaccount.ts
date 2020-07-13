export interface BankAccount {
  id: number;
  accountNumber: string;
  accountName: string;
  currency: string;
  balance: number;
  transactions: Record<'data', Transaction[]>;
}

export interface Transaction {
  amount: string;
  categoryCode?: string;
  merchant: string;
  merchantLogo?: string;
  transactionDate: number;
  transactionType: string;
}

export interface BankAccountUpdate {
  balance?: number;
  transactions?: Record<'data', Transaction[]>;
}

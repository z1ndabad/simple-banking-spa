export interface TransferPanelData {
  accountNumber: string;
  accountName: string;
  balance: string;
}

export interface TransferPreviewData {
  from: string;
  to: string;
  amount: string;
}

export interface TransactionsSortable {
  amount: number;
  categoryCode?: string;
  merchant: string;
  merchantLogo?: string;
  transactionDate: number;
  transactionType: string;
}

export interface TransactionsPrintable {
  amount: number;
  categoryCode?: string;
  merchant: string;
  merchantLogo?: string;
  transactionDate: string;
  transactionType: string;
}

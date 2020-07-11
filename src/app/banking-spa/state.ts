import { BankAccount } from './models/bankaccount';

export interface AppState {
  bankAccount: BankAccount;
  transferStarted: boolean;
}

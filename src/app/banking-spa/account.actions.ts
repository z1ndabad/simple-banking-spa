import { createAction, props } from '@ngrx/store';
import { BankAccount, TransactionData } from './models/bankaccount';

export const addTransaction = createAction(
  '[BankAccount] Add Transaction',
  props<{ transaction: TransactionData }>()
);

export const editBalance = createAction(
  '[BankAccount] Edit Balance',
  props<{ bankAccount: BankAccount }>()
);

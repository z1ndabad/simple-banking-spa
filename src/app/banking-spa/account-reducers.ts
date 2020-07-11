import { createReducer, on } from '@ngrx/store';
import { addTransaction, editBalance } from './account.actions';

export const accountReducer = createReducer<BankAccount>(
  initial,
  on(addTransaction)
);

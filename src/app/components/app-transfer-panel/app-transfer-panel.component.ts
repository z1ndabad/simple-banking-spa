import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  TransferPanelData,
  TransferPreviewData
} from 'src/app/models/viewmodels';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './app-transfer-panel.component.html',
  styleUrls: ['./app-transfer-panel.component.css']
})
export class AppTransferPanelComponent implements OnInit {
  transferForm: FormGroup;
  balance: number;
  overdrawn: boolean;
  badAmount: boolean;

  @Input()
  set dataInput(data: TransferPanelData) {
    if (data) {
      this.updateForm(this.transferForm, data);
      this.balance = parseFloat(data.balance);
    }
  }

  @Output() formSubmitted = new EventEmitter<TransferPreviewData>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      from: [{ value: '', disabled: true }, Validators.required],
      to: ['', Validators.required],
      amount: ['0.00', Validators.required]
    });
  }

  updateForm(form: FormGroup, data: TransferPanelData): void {
    const accountNameFormatted = `${
      data.accountName
    } (${data.accountNumber.slice(-4)} – \$${this._formatCurrency(
      data.balance
    )})`;

    form.patchValue({ from: accountNameFormatted, to: '', amount: '0.00' });
  }

  onSubmit(form: FormGroup): void {
    if (this.balance - this.transferForm.get('amount').value < -500) {
      this.overdrawn = true;
    } else if (this.transferForm.get('amount').value <= 0) {
      this.badAmount = true;
    } else {
      this.formSubmitted.emit(form.getRawValue());
    }
  }

  _formatCurrency(curr: string): string {
    return parseFloat(curr).toFixed(2).toString();
  }
}

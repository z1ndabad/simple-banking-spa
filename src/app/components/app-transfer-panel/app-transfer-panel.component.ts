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

  @Input()
  set dataInput(data: TransferPanelData) {
    if (data) {
      this.updateForm(this.transferForm, data);
    }
  }

  @Output() formSubmitted = new EventEmitter<TransferPreviewData>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      from: [{ value: '', disabled: true }, Validators.required],
      to: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  updateForm(form: FormGroup, data: TransferPanelData): void {
    const accountNameFormatted = `${
      data.accountName
    } (${data.accountNumber.slice(-4)} - ${data.balance})`;

    form.patchValue({ from: accountNameFormatted });
  }

  onSubmit(form: FormGroup): void {
    this.formSubmitted.emit(form.getRawValue());
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TransferPreviewData } from 'src/app/models/viewmodels';
import { Transaction } from 'src/app/models/bankaccount';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-transfer-preview',
  templateUrl: './transfer-preview.component.html',
  styleUrls: ['./transfer-preview.component.css']
})
export class TransferPreviewComponent {
  from: string;
  to: string;
  amount: string;

  @Input()
  set dataInput(data: TransferPreviewData) {
    if (data) {
      this.from = data.from;
      this.to = data.to;
      this.amount = data.amount;
    }
  }

  @Output() transferApproved = new EventEmitter<Transaction>();

  constructor(private modalService: ModalService) {}

  onTransfer(): void {
    this.transferApproved.emit({
      amount: this.amount,
      merchant: this.to,
      transactionDate: Date.now(),
      transactionType: 'Online Transfer'
    });
    this.modalService.close('transfer-preview-modal');
  }
}

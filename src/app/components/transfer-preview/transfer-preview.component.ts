import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TransferPreviewData } from 'src/app/models/viewmodels';

@Component({
  selector: 'app-transfer-preview',
  templateUrl: './transfer-preview.component.html',
  styleUrls: ['./transfer-preview.component.css']
})
export class TransferPreviewComponent {
  from: string;
  to: string;
  amount: number;

  @Input()
  set dataInput(data: TransferPreviewData) {
    if (data) {
      this.from = data.from;
      this.to = data.to;
      this.amount = data.amount;
    }
  }

  @Output() transferApproved = new EventEmitter<TransferPreviewData>();

  onTransfer(): void {
    this.transferApproved.emit({
      from: this.from,
      to: this.to,
      amount: this.amount
    });
  }
}

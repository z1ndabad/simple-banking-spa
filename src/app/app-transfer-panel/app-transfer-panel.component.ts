import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../services/account-service.service';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './app-transfer-panel.component.html',
  styleUrls: ['./app-transfer-panel.component.css']
})
export class AppTransferPanelComponent implements OnInit {
  transferForm: FormGroup;
  private accountName: string;
  private accountNumber: number;
  private balance: number;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      amount: ['$', Validators.required]
    });

    this.accountService._getAccount(1).then((acc) => {
      this.accountName = `${acc.name} (${acc.accountNumber
        .toString()
        .slice(-4)}) - \$${acc.balance}`;
      this.transferForm.patchValue({
        from: this.accountName
      });
    });
  }

  onSubmit(form: FormGroup): void {
    console.log('form: Do something!');
    this.transferForm.reset({ from: this.transferForm.value.from });
  }
}

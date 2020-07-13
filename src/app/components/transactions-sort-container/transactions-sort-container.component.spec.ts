import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSortContainerComponent } from './transactions-sort-container.component';

describe('TransactionsSortContainerComponent', () => {
  let component: TransactionsSortContainerComponent;
  let fixture: ComponentFixture<TransactionsSortContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsSortContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSortContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransactionsContainerComponent } from './recent-transactions-container.component';

describe('RecentTransactionsContainerComponent', () => {
  let component: RecentTransactionsContainerComponent;
  let fixture: ComponentFixture<RecentTransactionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentTransactionsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransactionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

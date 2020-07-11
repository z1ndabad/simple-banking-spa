import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTransferPanelComponent } from './app-transfer-panel.component';

describe('AppTransferPanelComponent', () => {
  let component: AppTransferPanelComponent;
  let fixture: ComponentFixture<AppTransferPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppTransferPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTransferPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

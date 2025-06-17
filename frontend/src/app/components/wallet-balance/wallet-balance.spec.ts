import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBalance } from './wallet-balance';

describe('WalletBalance', () => {
  let component: WalletBalance;
  let fixture: ComponentFixture<WalletBalance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletBalance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletBalance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

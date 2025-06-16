import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyToWallet } from './add-money-to-wallet';

describe('AddMoneyToWallet', () => {
  let component: AddMoneyToWallet;
  let fixture: ComponentFixture<AddMoneyToWallet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoneyToWallet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMoneyToWallet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

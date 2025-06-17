import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMoney } from './send-money';

describe('SendMoney', () => {
  let component: SendMoney;
  let fixture: ComponentFixture<SendMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendMoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMoney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

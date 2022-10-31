import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedesignComponent } from './invoicedesign.component';

describe('InvoicedesignComponent', () => {
  let component: InvoicedesignComponent;
  let fixture: ComponentFixture<InvoicedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicedesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

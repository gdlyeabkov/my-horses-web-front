import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDeleteAccountFormComponent } from './request-delete-account-form.component';

describe('RequestDeleteAccountFormComponent', () => {
  let component: RequestDeleteAccountFormComponent;
  let fixture: ComponentFixture<RequestDeleteAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestDeleteAccountFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDeleteAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

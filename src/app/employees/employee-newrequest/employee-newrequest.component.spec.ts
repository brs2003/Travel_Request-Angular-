import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewrequestComponent } from './employee-newrequest.component';

describe('EmployeeNewrequestComponent', () => {
  let component: EmployeeNewrequestComponent;
  let fixture: ComponentFixture<EmployeeNewrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeNewrequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeNewrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

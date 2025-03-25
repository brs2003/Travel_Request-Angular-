import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditrequestComponent } from './employee-editrequest.component';

describe('EmployeeEditrequestComponent', () => {
  let component: EmployeeEditrequestComponent;
  let fixture: ComponentFixture<EmployeeEditrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeEditrequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeEditrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

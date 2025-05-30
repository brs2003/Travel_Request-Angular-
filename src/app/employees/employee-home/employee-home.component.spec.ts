import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHomeComponent } from './employee-home.component';

describe('EmployeeHomeComponent', () => {
  let component: EmployeeHomeComponent;
  let fixture: ComponentFixture<EmployeeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

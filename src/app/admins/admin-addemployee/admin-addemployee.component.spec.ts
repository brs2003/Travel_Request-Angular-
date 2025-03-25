import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddemployeeComponent } from './admin-addemployee.component';

describe('AdminAddemployeeComponent', () => {
  let component: AdminAddemployeeComponent;
  let fixture: ComponentFixture<AdminAddemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddemployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

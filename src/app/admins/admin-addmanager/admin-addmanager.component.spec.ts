import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddmanagerComponent } from './admin-addmanager.component';

describe('AdminAddmanagerComponent', () => {
  let component: AdminAddmanagerComponent;
  let fixture: ComponentFixture<AdminAddmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddmanagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCancelrequestComponent } from './admin-cancelrequest.component';

describe('AdminCancelrequestComponent', () => {
  let component: AdminCancelrequestComponent;
  let fixture: ComponentFixture<AdminCancelrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCancelrequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCancelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

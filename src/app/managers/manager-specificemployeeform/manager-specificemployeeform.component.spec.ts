import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSpecificemployeeformComponent } from './manager-specificemployeeform.component';

describe('ManagerSpecificemployeeformComponent', () => {
  let component: ManagerSpecificemployeeformComponent;
  let fixture: ComponentFixture<ManagerSpecificemployeeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerSpecificemployeeformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerSpecificemployeeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecruitersComponent } from './adminrecruiters.component';

describe('AdminrecruitersComponent', () => {
  let component: AdminrecruitersComponent;
  let fixture: ComponentFixture<AdminrecruitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrecruitersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

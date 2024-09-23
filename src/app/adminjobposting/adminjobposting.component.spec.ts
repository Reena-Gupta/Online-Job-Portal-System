import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjobpostingComponent } from './adminjobposting.component';

describe('AdminjobpostingComponent', () => {
  let component: AdminjobpostingComponent;
  let fixture: ComponentFixture<AdminjobpostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminjobpostingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminjobpostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

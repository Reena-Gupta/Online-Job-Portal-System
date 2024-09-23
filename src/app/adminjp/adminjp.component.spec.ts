import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjpComponent } from './adminjp.component';

describe('AdminjpComponent', () => {
  let component: AdminjpComponent;
  let fixture: ComponentFixture<AdminjpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminjpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminjpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

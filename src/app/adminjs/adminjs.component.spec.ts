import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjsComponent } from './adminjs.component';

describe('AdminjsComponent', () => {
  let component: AdminjsComponent;
  let fixture: ComponentFixture<AdminjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsjobapplicationComponent } from './jsjobapplication.component';

describe('JsjobapplicationComponent', () => {
  let component: JsjobapplicationComponent;
  let fixture: ComponentFixture<JsjobapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsjobapplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsjobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

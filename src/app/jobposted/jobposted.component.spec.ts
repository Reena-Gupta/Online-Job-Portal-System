import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostedComponent } from './jobposted.component';

describe('JobpostedComponent', () => {
  let component: JobpostedComponent;
  let fixture: ComponentFixture<JobpostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobpostedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobpostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterdashboardComponent } from './recruiterdashboard.component';

describe('RecruiterdashboardComponent', () => {
  let component: RecruiterdashboardComponent;
  let fixture: ComponentFixture<RecruiterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecruiterdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JssidenavComponent } from './jssidenav.component';

describe('JssidenavComponent', () => {
  let component: JssidenavComponent;
  let fixture: ComponentFixture<JssidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JssidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JssidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

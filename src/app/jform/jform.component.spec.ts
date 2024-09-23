import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JformComponent } from './jform.component';

describe('JformComponent', () => {
  let component: JformComponent;
  let fixture: ComponentFixture<JformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUXProgramDetailsComponent } from './ui-ux-program-details.component';

describe('UIUXProgramDetailsComponent', () => {
  let component: UIUXProgramDetailsComponent;
  let fixture: ComponentFixture<UIUXProgramDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIUXProgramDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIUXProgramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

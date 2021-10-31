import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidInstructorComponent } from './android-instructor.component';

describe('AndroidInstructorComponent', () => {
  let component: AndroidInstructorComponent;
  let fixture: ComponentFixture<AndroidInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidInstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

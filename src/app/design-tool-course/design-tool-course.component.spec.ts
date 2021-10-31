import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignToolCourseComponent } from './design-tool-course.component';

describe('DesignToolCourseComponent', () => {
  let component: DesignToolCourseComponent;
  let fixture: ComponentFixture<DesignToolCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignToolCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignToolCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

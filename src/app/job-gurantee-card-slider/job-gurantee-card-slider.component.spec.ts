import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGuranteeCardSliderComponent } from './job-gurantee-card-slider.component';

describe('JobGuranteeCardSliderComponent', () => {
  let component: JobGuranteeCardSliderComponent;
  let fixture: ComponentFixture<JobGuranteeCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobGuranteeCardSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGuranteeCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

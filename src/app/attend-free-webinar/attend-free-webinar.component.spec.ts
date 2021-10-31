import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendFreeWebinarComponent } from './attend-free-webinar.component';

describe('AttendFreeWebinarComponent', () => {
  let component: AttendFreeWebinarComponent;
  let fixture: ComponentFixture<AttendFreeWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendFreeWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendFreeWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIDesignProgramComponent } from './ui-design-program.component';

describe('UIDesignProgramComponent', () => {
  let component: UIDesignProgramComponent;
  let fixture: ComponentFixture<UIDesignProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIDesignProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIDesignProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

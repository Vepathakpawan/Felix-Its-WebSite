import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignToolWorkshopComponent } from './design-tool-workshop.component';

describe('DesignToolWorkshopComponent', () => {
  let component: DesignToolWorkshopComponent;
  let fixture: ComponentFixture<DesignToolWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignToolWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignToolWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

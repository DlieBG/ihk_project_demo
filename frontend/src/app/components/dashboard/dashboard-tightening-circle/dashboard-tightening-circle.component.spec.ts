import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTighteningCircleComponent } from './dashboard-tightening-circle.component';

describe('DashboardTighteningCircleComponent', () => {
  let component: DashboardTighteningCircleComponent;
  let fixture: ComponentFixture<DashboardTighteningCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTighteningCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTighteningCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

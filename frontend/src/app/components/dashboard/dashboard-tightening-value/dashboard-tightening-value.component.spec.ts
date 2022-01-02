import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTighteningValueComponent } from './dashboard-tightening-value.component';

describe('DashboardTighteningValueComponent', () => {
  let component: DashboardTighteningValueComponent;
  let fixture: ComponentFixture<DashboardTighteningValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTighteningValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTighteningValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTighteningtaskComponent } from './dashboard-tighteningtask.component';

describe('DashboardTighteningtaskComponent', () => {
  let component: DashboardTighteningtaskComponent;
  let fixture: ComponentFixture<DashboardTighteningtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTighteningtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTighteningtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

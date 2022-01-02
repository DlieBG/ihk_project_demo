import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTighteningTableComponent } from './dashboard-tightening-table.component';

describe('DashboardTighteningTableComponent', () => {
  let component: DashboardTighteningTableComponent;
  let fixture: ComponentFixture<DashboardTighteningTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTighteningTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTighteningTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

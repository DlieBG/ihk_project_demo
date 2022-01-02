import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverlayComponent } from './dashboard-overlay.component';

describe('DashboardOverlayComponent', () => {
  let component: DashboardOverlayComponent;
  let fixture: ComponentFixture<DashboardOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

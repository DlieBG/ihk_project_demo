import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverlayCreateComponent } from './dashboard-overlay-create.component';

describe('DashboardOverlayCreateComponent', () => {
  let component: DashboardOverlayCreateComponent;
  let fixture: ComponentFixture<DashboardOverlayCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOverlayCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverlayCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

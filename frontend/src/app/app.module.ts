import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DashboardTighteningCircleComponent } from './components/dashboard/dashboard-tightening-circle/dashboard-tightening-circle.component';
import { DashboardTighteningTableComponent } from './components/dashboard/dashboard-tightening-table/dashboard-tightening-table.component';
import { DashboardTighteningValueComponent } from './components/dashboard/dashboard-tightening-value/dashboard-tightening-value.component';
import { DashboardTighteningtaskComponent } from './components/dashboard/dashboard-tighteningtask/dashboard-tighteningtask.component';
import { DashboardOverlayComponent } from './components/dashboard/dashboard-overlay/dashboard-overlay.component';
import { DashboardControlComponent } from './components/dashboard/dashboard-control/dashboard-control.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardTighteningCircleComponent,
    DashboardTighteningTableComponent,
    DashboardTighteningValueComponent,
    DashboardTighteningtaskComponent,
    DashboardOverlayComponent,
    DashboardControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

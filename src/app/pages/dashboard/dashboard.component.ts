import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    WidgetComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [DashboardService],
  template: `
    <div class="header">
      <h1>Dashboard</h1>
      <button mat-raised-button [mat-menu-trigger-for]="widgetMenu">
        <mat-icon>add_circle</mat-icon>
        Add Widget
      </button>
      <mat-menu #widgetMenu="matMenu">
        @for (widget of store.widgetsToAdd(); track widget.id) {
        <button mat-menu-item (click)="store.addWidget(widget)">
          <!-- <mat-icon>{{ widget.content.icon }}</mat-icon> -->
          {{ widget.label }}
          <!-- <span class="spacer"></span>
            <button mat-button (click)="store.addedWidgets.update(widgets => [...widgets, widget])">
              Add
            </button> -->
        </button>
        } @empty {
        <button mat-menu-item disabled>No widgets available</button>
        }
      </mat-menu>
    </div>

    <div class="dashboard-widgets">
      @for (widget of store.addedWidgets(); track widget.id) {
      <app-widget [data]="widget" />
      }
    </div>
  `,
  styles: `
    .dashboard-widgets {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: 150px;
      gap: 16px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  `,
})
export class DashboardComponent {
  store = inject(DashboardService);
}

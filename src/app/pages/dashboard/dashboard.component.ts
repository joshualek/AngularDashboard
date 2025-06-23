import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WidgetComponent],
  providers: [DashboardService],
  template: `
    <h1>Dashboard</h1>
    <div class="dashboard-widgets">
      @for (widget of store.widgets(); track widget.id) {
      <app-widget [data]="widget"></app-widget>
      }
    </div>
  `,
  styles: `
    .dashboard-widgets {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
  `,
})
export class DashboardComponent {
  store = inject(DashboardService);
}

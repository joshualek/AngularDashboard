import { Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views.component';

@Injectable()
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: SubscribersComponent,
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
    },
  ]);
  constructor() {}
}

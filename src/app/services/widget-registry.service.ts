import { Injectable, Type } from '@angular/core';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetRegistryService {

  constructor() { }
  private registry: Record<string, Type<any>> = {
    'subscribers': SubscribersComponent,
    'views': ViewsComponent,
  };

  getComponent(type: string): Type<any> | null {
    return this.registry[type] || null;
  }
}

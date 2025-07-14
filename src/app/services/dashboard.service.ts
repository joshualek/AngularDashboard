import { computed, Injectable, signal } from '@angular/core';
import { Widget } from '../models/widget-config.model';
import { WidgetRegistryService } from './widget-registry.service';
import widgetJsonConfig from '../../assets/dashboard-widgets.json';

@Injectable()
export class DashboardService {
  widgets = signal<Widget[]>([]);

  constructor(private registry: WidgetRegistryService) {
    const resolved = (widgetJsonConfig as any[]).map(w => ({
      ...w,
      content: this.registry.getComponent(w.type)
    }));
    this.widgets.set(resolved);
  }

  addedWidgets = signal<Widget[]>([]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((widget) => widget.id);
    return this.widgets().filter((widget) => !addedIds.includes(widget.id));
  });

  addWidget(widget: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...widget }]);
  }

  updateWidget(id: number, updatedWidget: Partial<Widget>) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const updatedWidgets = [...this.addedWidgets()];
      updatedWidgets[index] = { ...updatedWidgets[index], ...updatedWidget };
      this.addedWidgets.set(updatedWidgets);
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1  && index < this.addedWidgets().length - 1) {
      const updatedWidgets = [...this.addedWidgets()];
      [updatedWidgets[index], updatedWidgets[index + 1]] = [{...updatedWidgets[index + 1]}, { ...updatedWidgets[index]}];
      this.addedWidgets.set(updatedWidgets);
    } else return;
  }
  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1  && index > 0) {
      const updatedWidgets = [...this.addedWidgets()];
      [updatedWidgets[index], updatedWidgets[index - 1]] = [{...updatedWidgets[index - 1]}, { ...updatedWidgets[index]}];
      this.addedWidgets.set(updatedWidgets);
    } else return;
  }

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter((widget) => widget.id !== id));
  }
}

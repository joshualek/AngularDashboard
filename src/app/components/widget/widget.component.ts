import { Component, input, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptionsComponent } from "./widget-options/widget-options.component";

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptionsComponent],
  template: `
    <div class="container mat-elevation-z3" [style.backgroundColor]="data().backgroundColor ?? 'white'" [style.color]="data().color ?? 'inherit'">
      <h3 class="m-0">{{ data().label }}</h3>
      <button
        mat-icon-button
        class="settings-button"
        (click)="showOptions.set(true)"
      >
        <mat-icon>settings</mat-icon>
      </button>
      <ng-container [ngComponentOutlet]="data().content"></ng-container>

      @if (showOptions()) {
        <app-widget-options [(showOptions)]="showOptions" [data]="data()" />
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      border-radius: 16px;
    }

    .container {
      position: relative;
      height: 100%;
      width: 100%;
      padding: 32px;
      box-sizing: border-box;
      border-radius: inherit;
      overflow: hidden;
    }

    .settings-button {
      position: absolute;
      top: 20px;
      right: 20px;
      color:white
    }
  `,
  host: {
    '[style.grid-area]': 'gridArea',
  },
})
export class WidgetComponent {
  data = input.required<Widget>();

  showOptions = signal(false);

  get gridArea(): string {
    const d = this.data();
    return `span ${d.rows ?? 1} / span ${d.columns ?? 1}`;
  }
}

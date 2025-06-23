import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      content works!
    </p>
  `,
  styles: ``
})
export class ContentComponent {

}

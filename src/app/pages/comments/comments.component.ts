import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      comments works!
    </p>
  `,
  styles: ``
})
export class CommentsComponent {

}

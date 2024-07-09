import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-danger-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './danger-message.component.html',
  styleUrls: ['./danger-message.component.scss']
})
export class DangerMessageComponent {
  @Input() message: string = '';
}

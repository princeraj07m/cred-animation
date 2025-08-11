import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spotlight.html',
  styleUrls: ['./spotlight.scss']
})
export class SpotlightComponent {
  mouseX = 0;
  mouseY = 0;

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}

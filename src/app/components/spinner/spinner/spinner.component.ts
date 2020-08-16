import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() name: string = 'dots';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
})
export class InfoItemComponent {
  @Input() icon: string = '';
  @Input() info: string = '';

  get getIconName(): string {
    let result = this.icon;

    if (this.icon === 'gender') {
      result = this.info;
    }

    return `${result}-outline`;
  }
}

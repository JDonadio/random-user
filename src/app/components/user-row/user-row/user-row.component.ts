import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
})
export class UserRowComponent {
  @Input() user: IUser;
  @Output() handleClick: EventEmitter<IUser> = new EventEmitter();

  public onClick(user: IUser): void {
    this.handleClick.emit(user);
  }

}

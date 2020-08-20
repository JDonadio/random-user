import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserRowComponent } from './user-row.component';
import { makeUser } from 'src/app/models/user';

describe('UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = makeUser({});
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the event with parameter type = IUser', () => {
    const user = makeUser({});
    spyOn(component.handleClick, 'emit').withArgs(user);
    component.onClick(user);
    expect(component.handleClick.emit).toHaveBeenCalledWith(user);
  });
});

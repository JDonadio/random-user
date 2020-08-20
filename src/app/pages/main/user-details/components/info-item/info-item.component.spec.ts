import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoItemComponent } from './info-item.component';

describe('InfoItemComponent', () => {
  let component: InfoItemComponent;
  let fixture: ComponentFixture<InfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist parameter icon with value "" as default', () => {
    expect(component.icon).toEqual('');
  });

  it('should exist parameter info with value "" as default', () => {
    expect(component.info).toEqual('');
  });

  it('should return "date-outline" for getIconName if icon value is "date"', () => {
    component.icon = 'date';
    expect(component.getIconName).toEqual('date-outline');
  });

  it('should return "male-outline" for getIconName if icon value is "gender" and info value is "male"', () => {
    component.icon = 'gender';
    component.info = 'male';
    expect(component.getIconName).toEqual('male-outline');
  });

  it('should return "female-outline" for getIconName if icon value is "gender" and info value is "female"', () => {
    component.icon = 'gender';
    component.info = 'female';
    expect(component.getIconName).toEqual('female-outline');
  });
});

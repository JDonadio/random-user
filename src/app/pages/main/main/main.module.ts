import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { UserRowComponent } from 'src/app/components/user-row/user-row/user-row.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
  ],
  declarations: [
    MainPage,
    UserRowComponent,
    SpinnerComponent,
  ]
})
export class MainPageModule {}

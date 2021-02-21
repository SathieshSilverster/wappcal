import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiniPageRoutingModule } from './cini-routing.module';

import { CiniPage } from './cini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiniPageRoutingModule
  ],
  declarations: [CiniPage]
})
export class CiniPageModule {}

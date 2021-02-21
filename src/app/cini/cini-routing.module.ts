import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiniPage } from './cini.page';

const routes: Routes = [
  {
    path: '',
    component: CiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiniPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayautComponent } from './main-layaut.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayautComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayautRoutingModule {}

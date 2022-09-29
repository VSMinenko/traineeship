import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/layouts/main-layaut/main-layaut.module').then(
        (m) => m.MainLayautModule
      ),
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'main',
  // },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

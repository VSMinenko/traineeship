import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayautRoutingModule } from './main-layaut-routing.module';
import { MainLayautComponent } from './main-layaut.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [MainLayautComponent],
  imports: [
    CommonModule,
    MainLayautRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
  ],
})
export class MainLayautModule {}

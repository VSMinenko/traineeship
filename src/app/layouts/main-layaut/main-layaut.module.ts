import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayautRoutingModule } from './main-layaut-routing.module';
import { MainLayautComponent } from './main-layaut.component';

@NgModule({
  declarations: [MainLayautComponent],
  imports: [CommonModule, MainLayautRoutingModule],
})
export class MainLayautModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesPage } from './agencies.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgenciesPage
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    SharedModule
  ]
})
export class AgenciesModule { }

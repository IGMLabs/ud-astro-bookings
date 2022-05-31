import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, TitleComponent],
  imports: [CommonModule,RouterModule],
  exports: [HeaderComponent]
})
export class CoreModule { }


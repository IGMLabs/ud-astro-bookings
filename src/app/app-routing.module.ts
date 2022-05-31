import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './about/about.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
},
{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

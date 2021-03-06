import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { Portfolio1Component } from './pages/portfolio1/portfolio1.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{

    path:'services',
    component:ServicesComponent
  },
  {

    path:'portfolio',
    component:PortfolioComponent
  },
  {

    path:'about-us',
    component:AboutUsComponent
  },
  {

    path:'contact-us',
    component:ContactComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/modules/admin-module/admin-module.module').then(m=>m.AdminModuleModule)

  },

  {
    path:'portfolio1/:id',
    component:Portfolio1Component
  },

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

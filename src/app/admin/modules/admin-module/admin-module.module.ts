import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }

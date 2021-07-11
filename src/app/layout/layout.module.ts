import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { MaterialdependencyModule } from '../materialdependency/materialdependency.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ ];


@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedmoduleModule,
    MaterialdependencyModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }

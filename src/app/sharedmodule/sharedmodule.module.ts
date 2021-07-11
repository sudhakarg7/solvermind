import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { MaterialdependencyModule } from '../materialdependency/materialdependency.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CardComponent],
  imports: [
    CommonModule,
    MaterialdependencyModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, CardComponent]
})
export class SharedmoduleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HomelazyComponent } from 'src/app/componentes/homelazy/homelazy.component';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }

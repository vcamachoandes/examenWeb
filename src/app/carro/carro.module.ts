import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroListComponent } from './carro-list/carro-list.component';

@NgModule({
  imports: [
    CommonModule,
    CarroListComponent
  ],
  exports: [
    CarroListComponent
  ],
})
export class CarroModule { }

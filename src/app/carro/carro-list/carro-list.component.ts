import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css'],
  imports: [CommonModule]
})
export class CarroListComponent implements OnInit {

  carros: Array<Carro> = [];
  marcaCount: { [key: string]: number } = {};

  constructor(private carroService: CarroService) { }

  

  getCarros(): void {
    this.carroService.getCarros().subscribe((carros) => {
      this.carros = carros;
      this.calculateMarcaCount();
    })
  }

  getMarcaKeys(): string[] {
    return Object.keys(this.marcaCount);
  }

  calculateMarcaCount(): void {
    this.marcaCount = {};
    this.carros.forEach(carro => {
      if (this.marcaCount[carro.marca]) {
        this.marcaCount[carro.marca]++;
      } else {
        this.marcaCount[carro.marca] = 1;
      }
    });
  }

  ngOnInit() {
    this.getCarros();
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carros: Array<Carro> =[];

  constructor() { }

  ngOnInit() {
  }

}

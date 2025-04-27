import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CarroListComponent } from './carro-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';

describe('CarroListComponent', () => {
  let component: CarroListComponent;
  let fixture: ComponentFixture<CarroListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CarroListComponent],
      providers: [CarroService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const carro = new Carro(
        faker.number.int().toString(),
        faker.vehicle.manufacturer(),   // Marca
        faker.vehicle.model(),           // Línea
        faker.vehicle.model(),           // Modelo
        faker.number.int(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.image.url()
      );
      component.carros.push(carro);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with one header row and three data rows', () => {
    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();

    const thead = debug.query(By.css('thead'));
    expect(thead).toBeTruthy();

    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });
});

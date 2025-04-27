/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { CarroService } from './carro.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Carro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarroService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([CarroService], (service: CarroService) => {
    expect(service).toBeTruthy();
  }));
});

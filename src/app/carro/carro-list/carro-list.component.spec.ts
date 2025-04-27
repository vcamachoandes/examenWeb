/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarroListComponent } from './carro-list.component';

describe('CarroListComponent', () => {
  let component: CarroListComponent;
  let fixture: ComponentFixture<CarroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

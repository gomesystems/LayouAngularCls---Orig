import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Car } from 'src/models/car';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'ApiRest',
  templateUrl: './ApiRest.component.html',
  styleUrls: ['./ApiRest.component.css']
})
export class ApiRestComponent implements OnInit {
  car = {} as Car;
  cars: Car[];

  constructor(private carService: CarService) {}
  
  ngOnInit() {
    this.getCars();
  }

  // defini se um carro será criado ou atualizado
  saveCar(form: NgForm) {
    if (this.car.id !== undefined) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carService.saveCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os carros
  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }

  // deleta um carro
  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.getCars();
    });
  }

  // copia o carro para ser editado.
  editCar(car: Car) {
    this.car = { ...car };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as Car;
  }

}
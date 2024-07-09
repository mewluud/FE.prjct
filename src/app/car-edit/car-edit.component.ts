import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RefsService } from '../services/refs.service';
import { StateManagerService } from '../services/state-manager.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent implements OnInit {
  carForm: FormGroup;
  carTypes: string[] = [];
  cars: Car[] = [];
  carToEdit: Car = { id: '', brand: '', year: 0, country: '', type: '', manufacturer: '', model: '' };

  constructor(private formBuilder: FormBuilder,
              private refsService: RefsService,
              private stateManagerService: StateManagerService,
              private cdr: ChangeDetectorRef) {
    this.carForm = this.formBuilder.group({
      brand: ['', Validators.required],
      year: ['', Validators.required],
      country: ['', Validators.required],
      type: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carTypes = this.refsService.carTypes;
    this.loadState(); // Load previously saved cars array state
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const newCar: Car = {
        id: (this.cars.length + 1).toString(),
        brand: this.carForm.value.brand,
        year: this.carForm.value.year,
        country: this.carForm.value.country,
        type: this.carForm.value.type,
        manufacturer: this.carForm.value.manufacturer,
        model: this.carForm.value.model
      };

      this.cars.push(newCar);
      this.saveState(); // Save updated cars array
      this.carForm.reset(); // Reset the form after adding a car
      this.detectChanges(); // Trigger change detection
    }
  }

  removeCar(car: Car): void {
    this.cars = this.cars.filter(c => c.id !== car.id);
    this.saveState(); // Save updated cars array after removing a car
    this.detectChanges(); // Trigger change detection
  }

  private saveState(): void {
    // Save cars array state to sessionStorage using StateManagerService
    this.stateManagerService.setState('carsState', this.cars);
  }

  private loadState(): void {
    // Load cars array state from sessionStorage using StateManagerService
    const savedState = this.stateManagerService.getState<Car[]>('carsState');
    if (savedState) {
      this.cars = savedState;
    }
  }

  private detectChanges(): void {
    this.cdr.detectChanges(); // Manually trigger change detection
  }

}




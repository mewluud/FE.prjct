import { Component, Input, Output } from '@angular/core';
interface CarDetails {
  [key: string]: {
    name: string;
    manufacturer: string;
    model: string;
    year: number;
    // Add other properties as needed
  };
}
@Component({
  selector: 'app-output-table-component',
  templateUrl: './output-table-component.html',
  styleUrls: ['./output-table-component.scss']
})
export class OutputTableComponent {
  @Input() selectedCarType: string = '';
  @Input() selectedCarReference: string = '';

  // Sample data structure for displaying car details
  carDetails: CarDetails = {
    'Electric': {
      name: 'Toyota Prius',
      manufacturer: 'Toyota',
      model: 'Prius X',
      year: 2022
    },
    'Hybrid': {
      name: 'Ford Fusion Hybrid',
      manufacturer: 'Ford',
      model: 'Fusion',
      year: 2021
    },
    'Fuel':{
      name: 'bmw X9',
      manufacturer: 'BMW',
      model: 'AMG',
      year: 2025
    }
    // Add more details as needed
  };

  constructor() {
  }

  // Helper method to get car details based on type and reference
  getCarDetails(): CarDetails[string] | null {
    return this.carDetails[this.selectedCarType] || null;
  }

}

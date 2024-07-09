import { Component, ViewChild,Input } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { RefsService } from '../services/refs.service';
import { StateManagerService } from '../services/state-manager.service';
import { Car } from '../models/car.model';


@Component({
  selector: 'app-Car',
  templateUrl: './Car.component.html',
  styleUrls: ['./Car.component.scss']
})
export class CarComponent {
  @ViewChild('tableComponent') tableComponent!: TableComponent;
  cars: Car[] = [
    { id: '1',brand: 'Toyota', year: 2020, country: 'Japan', type: 'Electric', manufacturer: 'Toyota', model: 'Prius X'  },
    { id: '2', brand: 'Ford', year: 2018, country: 'USA', type: 'Hybrid', manufacturer: 'Ford', model: 'Fusion' },
    { id: '3', brand: 'BMW', year: 2025, country: 'Germany', type: 'Fuel', manufacturer: 'BMW', model: 'AMG' }
  ];
  selectedCarType: string = '';
  selectedCarReference: string = '';
  constructor(private refsService: RefsService, private stateManagerService: StateManagerService) {}

  onSearch(search: string): void {
    this.tableComponent.filterCars(search);
  }
  ngOnInit(): void {
    this.initializeCarReferences();
  }
  private initializeCarReferences(): void {
    this.cars.forEach(car => {
      const reference = `REF_${car.id}`; // Example: Use car id as reference
      this.refsService.storeReference(car.id, reference);
    });

  }
  onCarSelected(event: { carType: string, reference: string }): void {
    this.selectedCarType = event.carType;
    this.selectedCarReference = event.reference;
  }
}


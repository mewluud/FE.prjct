import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';
import { UtilService } from '../services/util.service';
import { RefsService } from '../services/refs.service'; // Import RefsService
import { StateManagerService } from '../services/state-manager.service'; // Import StateManagerService
import { Car } from '../models/car.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() cars: Car[] = [];
  sortedCars: Car[] = [];
  carTypes: string[] = [];
  @Output() carSelected = new EventEmitter<{ carType: string, reference: string }>();

  constructor(private utilService: UtilService,
              private refsService: RefsService,
              private stateManagerService: StateManagerService) {
    this.sortedCars= this.cars;
  }
  selectCar(car: Car): void {
    const reference = this.refsService.getReference(car.id);
    if (reference) {
      this.carSelected.emit({ carType: car.type, reference });
    } else {
      console.log('Reference not found for selected car type');
    }
  }

  ngOnInit(): void {
    this.sortedCars= this.cars;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cars']) {
      this.sortedCars = changes['cars'].currentValue as Car[]; // Update sortedCars when cars input changes
      this.saveState(); // Save state after updating sortedCars
    }
  }


  sort(key: keyof Car): void {
    this.sortedCars = this.utilService.sortByKey(this.sortedCars, key);
    this.saveState(); // Save sortedCars state after sorting
  }
  filterCars(search: string): void {
    this.sortedCars = this.cars.filter(car =>
      car.brand.toLowerCase().includes(search.toLowerCase()) ||
      car.year.toString().includes(search) ||
      car.country.toLowerCase().includes(search.toLowerCase())
    );
    this.saveState(); // Save filteredCars state after filtering
  }
  saveState(): void {
    // Save sortedCars state to sessionStorage using StateManagerService
    this.stateManagerService.setState('sortedCarsState', this.sortedCars);
  }
  private loadState(): void {
    // Load sortedCars state from sessionStorage using StateManagerService
    const savedState = this.stateManagerService.getState<Car[]>('sortedCarsState');
    if (savedState) {
      this.sortedCars = savedState;
    }
  }
}



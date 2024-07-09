// refs.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefsService {
  carTypes: string[] = ['Electric', 'Hybrid', 'Fuel'];
  private references: { [id: string]: string } = {};

  constructor() {}

  // Store reference for a car type
  storeReference(id: string, reference: string): void {
    this.references[id] = reference;
  }

  getReference(id: string): string | undefined {
    return this.references[id];
  }

}


import { Injectable } from '@angular/core';
import { MaintenanceLog } from '../models';
import { CrudService } from './crud.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceLogService extends CrudService<MaintenanceLog> {
  _items = [];
  constructor() {
    super();
  }
}

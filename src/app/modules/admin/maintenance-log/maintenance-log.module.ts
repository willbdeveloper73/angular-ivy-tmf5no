import { NgModule } from '@angular/core';
import {
  SharedModule,
  MaintenanceLogAdminElements,
  MaintenanceLogForm,
} from '../../shared';
import { FormModule } from '../../form';
import { MaintenanceLogRoutingModule } from './maintenance-log-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, MaintenanceLogRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    MaintenanceLogForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return MaintenanceLogAdminElements;
      },
    },
  ],
})
export class MaintenanceLogModule {}

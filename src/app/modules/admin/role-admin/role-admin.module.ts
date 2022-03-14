import { NgModule } from '@angular/core';
import { SharedModule, RoleElements, RoleForm } from '../../shared';
import { FormModule } from '../../form';
import { RoleAdminRoutingModule } from './role-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, RoleAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    RoleForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return RoleElements;
      },
    },
  ],
})
export class RoleAdminModule {}

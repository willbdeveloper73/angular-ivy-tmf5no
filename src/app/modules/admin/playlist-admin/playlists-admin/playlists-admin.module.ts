import { NgModule } from '@angular/core';
import { SharedModule, PlayListElements, PlayListForm } from '../../../shared';
import { PlaylistsAdminRoutingModule } from './playlists-admin-routing.module';
import { FormModule } from '../../../form';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, PlaylistsAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    PlayListForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListElements;
      },
    },
  ],
})
export class PlaylistsAdminModule {}

import { NgModule } from '@angular/core';
import {
  SharedModule,
  PlayListItemForm,
  PlayListItemElements,
} from '../../../shared';
import { FormModule } from '../../../form';
import { PlaylistsItemAdminRoutingModule } from './playlists-item-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, PlaylistsItemAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    PlayListItemForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListItemElements;
      },
    },
  ],
})
export class PlaylistsItemAdminModule {}

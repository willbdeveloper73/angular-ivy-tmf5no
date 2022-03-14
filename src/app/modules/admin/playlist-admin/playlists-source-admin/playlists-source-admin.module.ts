import { NgModule } from '@angular/core';
import {
  SharedModule,
  PlayListSourceForm,
  PlayListSourceElements,
} from '../../../shared';
import { FormModule } from '../../../form';
import { PlaylistsSourceAdminRoutingModule } from './playlists-source-admin-routing.module';
import { Components, ComponentsExport } from './components';

@NgModule({
  imports: [SharedModule, FormModule, PlaylistsSourceAdminRoutingModule],
  declarations: [...Components],
  exports: [...ComponentsExport],
  providers: [
    PlayListSourceForm,
    {
      provide: 'COLUMNS',
      useValue: () => {
        return PlayListSourceElements;
      },
    },
  ],
})
export class PlaylistsSourceAdminModule {}

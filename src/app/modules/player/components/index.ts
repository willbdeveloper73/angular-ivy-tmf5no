import { PlayerComponent } from './player';
import { PlayerItemComponent } from './player-item';
import { PlayerMetaComponent } from './player-meta';

export const ComponentsExport = [PlayerComponent];

export const Components = [
  ...ComponentsExport,
  PlayerItemComponent,
  PlayerMetaComponent,
];

export * from './player';
export * from './player-item';
export * from './player-meta';

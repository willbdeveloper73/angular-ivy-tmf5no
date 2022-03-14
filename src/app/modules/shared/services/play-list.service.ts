import { Injectable } from '@angular/core';
import { PlayList } from '../models';
import { CrudService } from './crud.service';
import { rawPlayLists } from './rawData';

@Injectable({ providedIn: 'root' })
export class PlayListService extends CrudService<PlayList> {
  _items = rawPlayLists;

  constructor() {
    super();
  }
}

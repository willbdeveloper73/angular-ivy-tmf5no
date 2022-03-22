import { DialogComponent } from './dialog';
import { LayoutComponent } from './layout';

export const ComponentsExport = [DialogComponent];

export const Components = [...ComponentsExport, LayoutComponent];

export * from './dialog';
export * from './layout';

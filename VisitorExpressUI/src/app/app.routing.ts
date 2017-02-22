import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { VisitorRoutes } from './visitor/index';
import { VisitorListRoutes } from './visitorList/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...VisitorRoutes,
    ...VisitorListRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

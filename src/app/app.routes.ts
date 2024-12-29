import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
    {
        //canActivateChild: [publicGuard()],
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes'),
    },
    {
        // canActivateChild: [privateGuard()],
        path: 'pinturas',
        loadChildren: () => import('./pinturas/features/pinturas.routes'),
    },
    {
        path: '**',
        redirectTo: '/pinturas',
    }

];

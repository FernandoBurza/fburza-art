import { Routes } from "@angular/router"
export default [
    {
        path: '',
        loadComponent: () => import('./pinturas-list/pinturas-list.component')
    },
    {
        path: 'detalle/:id',
        loadComponent: () => import('./detalle-pintura/detalle-pintura.component')
    }

] as Routes;
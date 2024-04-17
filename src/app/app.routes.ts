import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'bienvenido',component:BienvenidoComponent},
    {path:'error',component:ErrorComponent}
];

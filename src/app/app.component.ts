import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  FormsModule,LoginComponent,ErrorComponent,BienvenidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}


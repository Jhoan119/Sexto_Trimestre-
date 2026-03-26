import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { /* crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos */
  bienvenidos = "Hola Jhoan" ;

  Estudiantes = ['Cuadernos','Gafas','Gorras','Lapiceros'] /* arreglos */

}



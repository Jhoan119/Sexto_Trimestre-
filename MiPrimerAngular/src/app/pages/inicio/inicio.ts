import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

    bienvenidos = "Hola Jhoan" ;

    Estudiantes = ['Cuadernos','Gafas','Gorras','Lapiceros'] /* arreglos */

}



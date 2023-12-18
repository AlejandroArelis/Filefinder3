import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Filefinder3';


  palabras: any = [{
    id: 1,
    significados: [
      "comida"
    ],
    formacion: [
      {
        id: 1,
        pronunciacion: "ta",
        caracter: {
          id: 2,
          display: "食",
          special: true
        }
      },
      {
        id: 2,
        pronunciacion: "be",
        caracter: {
          id: 1,
          display: "べ",
          special: false
        }
      },
      {
        id: 3,
        pronunciacion: "mono",
        caracter: {
          id: 2,
          display: "物",
          special: true
        }
      }
    ]
  }]


}

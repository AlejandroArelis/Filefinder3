import { Component } from '@angular/core';
import { Word } from '../../../../shared/Models/char.model';
import { CommonModule } from '@angular/common';
import { CharComponent } from '../../../../shared/components/char/char.component';
import { Kanji } from '../../../../shared/Models/kanji.model';

@Component({
  standalone: true,
  imports: [CommonModule, CharComponent],
  templateUrl: './detail.component.html',
  styles: ``
})
export class DetailComponent {
  kanji:Kanji = {
    id: 1,
    name: "しょく",
    kun: ["く", "た"],
    on: ["ショク", "ジキ"],
    meanings: ["Comer", "Comida"],
    img: "http://localhost:4200/assets/img/kanji/食.png",
    examples: [{
      id: 1,
      meanings: [
        "Comida (Objetos o sustancias)",
        "Alimineto"
      ],
      type: "Sustantivo",
      chars: [
        {
    
            id: 1,
            value: "た",
            text: "食",
            special: true
          
        },
        {
            id: 2,
            value: "べ",
            text: "べ",
            special: false
        },
        {
            id: 3,
            value: "もの",
            text: "物",
            special: true
        }
      ]
    }, {
      id: 2,
      meanings: [
        "Comida (Desayuno, almuerzo, cena)"
      ],
      type: "Sustantivo",
      chars: [
        {
    
            id: 4,
            value: "しょく",
            text: "食",
            special: true
          
        },
        {
            id: 5,
            value: "じ",
            text: "事",
            special: true
        }
      ]
    }, {
      id: 3,
      meanings: [
        "Comedor",
        "Cafetería"
      ],
      type: "Sustantivo",
      chars: [
        {
    
            id: 4,
            value: "しょく",
            text: "食",
            special: true
          
        },
        {
            id: 6,
            value: "どう",
            text: "堂",
            special: true
        }
      ]
    }, {
      id: 4,
      meanings: [
        "Productos alimenticios",
        "Alimentos"
      ],
      type: "Sustantivo",
      chars: [
        {
    
            id: 4,
            value: "しょく",
            text: "食",
            special: true
          
        },
        {
            id: 7,
            value: "ひん",
            text: "品",
            special: true
        }
      ]
    }, {
      id: 5,
      meanings: [
        "Comer",
        "Probar (comida)"
      ],
      type: "Verbo",
      chars: [
        {
    
            id: 1,
            value: "た",
            text: "食",
            special: true
          
        },
        {
            id: 2,
            value: "べ",
            text: "べ",
            special: false
        },
        {
            id: 8,
            value: "る",
            text: "る",
            special: false
        }
      ]
    }]
  }

  ngOnInit(): void {
  //   this.kanji = this._route.s
  }
}

import { Component, OnInit } from '@angular/core';
import { CharComponent } from '../../shared/components/char/char.component'
import { ActivatedRoute } from '@angular/router';
import { Word } from '../../shared/Models/char.model';

@Component({
  standalone: true,
  imports: [CharComponent],
  templateUrl: './kanji.component.html'
})
export class KanjiComponent implements OnInit {

  words: Word[] = [{
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
  }];

  // kanji: string;

  // constructor(private _route:ActivatedRoute) {

  // }

  ngOnInit(): void {
  //   this.kanji = this._route.s
  }
}

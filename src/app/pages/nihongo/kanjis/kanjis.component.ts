import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Kanji } from '../../../shared/Models/kanji.model';

@Component({
  selector: 'app-kanjis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kanjis.component.html',
  styles: ``
})
export default class KanjisComponent {
  kanjis: Kanji[] = [{
    id: 1,
    char: "食",
    jlpt: 5
  }, {
    id: 2,
    char: "来",
    jlpt: 5
  }];
}

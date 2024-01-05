import { Component } from '@angular/core';
import { Char } from '../../../shared/Models/char.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kanjis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kanjis.component.html',
  styles: ``
})
export class KanjisComponent {
  kanjis: Char[] = [{
    id: 1,
    text: "食"
  }];
}

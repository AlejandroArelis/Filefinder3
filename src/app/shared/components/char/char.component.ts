import { Component, Input} from '@angular/core';
import { Element } from '../../Models/char.model';

@Component({
  selector: 'char',
  standalone: true,
  imports: [],
  templateUrl: './char.component.html'
})
export class CharComponent {

  @Input() element!:Element;

}

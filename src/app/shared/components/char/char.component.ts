import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Char } from '../../Models/char.model';

@Component({
  selector: 'char',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './char.component.html',
})
export class CharComponent {
  @Input() char!: Char;

  kana = false;
}

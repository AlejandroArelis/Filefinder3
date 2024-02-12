import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Generic } from '@models/generic.model';

@Component({
  selector: 'char',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './char.component.html',
})
export class CharComponent {
  @Input() char!: Generic;

  kana = false;
}

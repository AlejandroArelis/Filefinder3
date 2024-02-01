import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../../Models/kanji.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tag.component.html',
  styles: ``,
})
export class TagComponent {
  @Input() data: Item[] = [];
  showInput = false;
  newTag = "";
}

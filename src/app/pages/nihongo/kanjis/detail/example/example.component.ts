import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TagComponent } from '@components/tag/tag.component';
import { Example } from '@models/example.model';
import { TagConfiguration } from '@models/tagConfiguration.model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MatDialogModule, TagComponent, FormsModule, CommonModule],
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
  private dialog = inject(MatDialogRef<ExampleComponent>);
  @Inject(MAT_DIALOG_DATA) public data!: Example;
  public meaningsConfig!: TagConfiguration;
  public charsConfig!: TagConfiguration;

  ngOnInit(): void {

    console.log(this.data);

    if(!this.data.example) {
      this.example = {
        meanings: [],
        chars: []
      }
    }

    this.meaningsConfig = {
      controllerUrl: '/nihongo/kanji/examples/meanings',
      data: this.example.meanings,
      tagStyle: true,
      title: 'Significados',
      generic: false,
      repeat: false
    };

    this.charsConfig = {
      controllerUrl: '/nihongo/kanji/examples/chars',
      data: this.example.chars,
      tagStyle: true,
      title: 'Caracteres',
      generic: true,
      repeat: true
    };
  }
}

import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TagComponent } from '@components/tag/tag.component';
import { Example } from '@models/example.model';
import { TagConfiguration } from '@models/tagConfiguration.model';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MatDialogModule, TagComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
  public meaningsConfig!: TagConfiguration;
  public charsConfig!: TagConfiguration;
  public form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Example,
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      text: ["", [Validators.required]],
      value: ["", [Validators.required]],
      meanings: this._formBuilder.array([this._formBuilder.group({
        text: ["", [Validators.required]],
      value: ["", [Validators.required]] 
      })], [Validators.minLength(1)]),
      chars: this._formBuilder.array([this._formBuilder.group({
        text: ["", [Validators.required]],
        value: ["", [Validators.required]] 
      })], [Validators.minLength(1)]),
      
    })
  }

  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        meanings: [],
        chars: [],
        text: '',
        value: '',
      };
    }

    this.meaningsConfig = {
      controllerUrl: '/nihongo/kanji/examples/meanings',
      data: this.data.meanings,
      tagStyle: true,
      title: 'Significados',
      generic: false,
      repeat: false,
    };

    this.charsConfig = {
      controllerUrl: '/nihongo/kanji/examples/chars',
      data: this.data.chars,
      tagStyle: true,
      title: 'Caracteres',
      generic: true,
      repeat: true,
    };
  }
}

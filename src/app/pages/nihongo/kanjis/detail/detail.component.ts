import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map } from 'rxjs';
import { CharComponent } from '@components/char/char.component';
import { TagComponent } from '@components/tag/tag.component';
import { KanjiService } from '@services/nihongo/kanji/kanji.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TagConfiguration } from '@models/tagConfiguration.model';
import { Kanji } from '@models/kanji.model';
import { DropZoneComponent } from '@components/drop-zone/drop-zone.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExampleComponent } from './example/example.component';
import { Example } from '@models/example.model';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CharComponent,
    TagComponent,
    RouterModule,
    DropZoneComponent,
    MatDialogModule,
    ExampleComponent
  ],
  templateUrl: './detail.component.html',
})
export default class DetailComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _kanjiService = inject(KanjiService);
  private _toast = inject(ToastrService);
  private _dialog = inject(MatDialog);

  kunConfig!: TagConfiguration;
  onConfig!: TagConfiguration;
  nameConfig!: TagConfiguration;
  meaningConfig!: TagConfiguration;

  kanji!: Kanji;

  async ngOnInit() {
    this.kanji = {
      names: [],
      kuns: [],
      ons: [],
      meanings: [],
      examples: []
    };

    this.kunConfig = {
      controllerUrl: '/nihongo/kanji/kuns',
      data: this.kanji.kuns,
      tagStyle: true,
      title: 'Kun',
      repeat: false,
      generic: false
    };

    this.nameConfig = {
      controllerUrl: '/nihongo/kanji/names',
      data: this.kanji.names,
      tagStyle: false,
      title: 'Nombres',
      repeat: false,
      generic: false
    };

    this.onConfig = {
      controllerUrl: '/nihongo/kanji/ons',
      data: this.kanji.ons,
      tagStyle: true,
      title: 'On',
      repeat: false,
      generic: false
    };

    this.meaningConfig = {
      controllerUrl: '/nihongo/kanji/meanings',
      data: this.kanji.meanings,
      tagStyle: true,
      title: 'Significados',
      repeat: false,
      generic: false
    };

    this._route.params.pipe(
      map(async ({ id }) => {
        if (id) {
          this.kanji = await firstValueFrom(this._kanjiService.getById(id));

          this.kunConfig.parentId = this.kanji.id;
          this.onConfig.parentId = this.kanji.id;
          this.nameConfig.parentId = this.kanji.id;
          this.meaningConfig.parentId = this.kanji.id;
        }
      })
    );
  }

  async save() {
    try {
      const response = await firstValueFrom(
        this._kanjiService.post(this.kanji)
      );
    } catch (e: any) {
      this._toast.error(e.message, 'Error');
    }
  }

  async saveImage(image: string) {
    try {
      this.kanji.image = image;
      // const response = await firstValueFrom(this._kanjiService.post(this.kanji));
    } catch (e: any) {
      this._toast.error(e.message, 'Error');
    }
  }

  async openDialog(example?:Example) {
    console.log("detail", example);
    const dialog = this._dialog.open(ExampleComponent, {
      data: {example}
    });

    this.kanji.examples?.push(await firstValueFrom(dialog.afterClosed()));
  }
}
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map } from 'rxjs';
import { CharComponent } from '@components/char/char.component';
import { TagComponent } from '@components/tag/tag.component';
import { KanjiService } from '@services/nihongo/kanji/kanji.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TagConfiguration } from '@models/tagConfiguration.model';
import { Kanji } from '@models/kanji.model';
import { DropZoneDirective } from '@directives/drop-zone.directive';
import { DropZoneComponent } from '@components/drop-zone/drop-zone.component';

@Component({
  standalone: true,
  imports: [CommonModule, CharComponent, TagComponent, RouterModule, DropZoneComponent],
  templateUrl: './detail.component.html',
})
export default class DetailComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _kanjiService = inject(KanjiService);

  kunConfig!: TagConfiguration;
  onConfig!: TagConfiguration;
  nameConfig!: TagConfiguration;

  kanji!: Kanji;

  allFiles: File[] = [];

  async ngOnInit() {

    this._route.params.pipe(map(async ({id}) => {
      if(id) {
        this.kanji = await firstValueFrom(this._kanjiService.getById(id));

        this.kunConfig = {
          parentId: this.kanji?.id,
          controllerUrl: '/nihongo/kanji/kuns',
          data: this.kanji?.kuns,
        };

        this.nameConfig = {
          parentId: this.kanji?.id,
          controllerUrl: '/nihongo/kanji/names',
          data: this.kanji?.names,
        };
    
        this.onConfig = {
          parentId: this.kanji?.id,
          controllerUrl: '/nihongo/kanji/ons',
          data: this.kanji?.ons,
        };
      }
    }))

    console.log(this.kanji);
  }

  fileSelected(file: any): void {
    console.log(file.target.files[0]);
  }
}

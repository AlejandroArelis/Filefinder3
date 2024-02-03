import { Component, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map, switchMap } from 'rxjs';
import { CharComponent } from '@components/char/char.component';
import { TagComponent } from '@components/tag/tag.component';
import { KanjiService } from '@services/nihongo/kanji/kanji.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TagConfiguration } from '@models/tagConfiguration.model';
import { Kanji } from '@models/kanji.model';

@Component({
  standalone: true,
  imports: [CommonModule, CharComponent, TagComponent, RouterModule],
  templateUrl: './detail.component.html',
})
export default class DetailComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _kanjiService = inject(KanjiService);

  kunConfig!: TagConfiguration;
  onConfig!: TagConfiguration;

  kanji!: Kanji;

  async ngOnInit() {
    this.kanji = await firstValueFrom(
      this._kanjiService.getById(
        await firstValueFrom(this._route.params.pipe(map(({ id }) => id)))
      )
    );

    this.kunConfig = {
      parentId: this.kanji?.id,
      controllerUrl: '/nihongo/kanji/kuns',
      data: this.kanji?.kuns,
    };

    this.onConfig = {
      parentId: this.kanji?.id,
      controllerUrl: '/nihongo/kanji/ons',
      data: this.kanji?.ons,
    };

    console.log(this.kanji);
  }
}

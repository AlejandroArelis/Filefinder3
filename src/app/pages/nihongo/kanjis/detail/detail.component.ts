import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CharComponent } from '../../../../shared/components/char/char.component';
import { Kanji } from '../../../../shared/Models/kanji.model';
import { Subscription } from 'rxjs';
import { TagComponent } from '../../../../shared/components/tag/tag.component';
import { KanjiService } from '../../../../shared/services/nihongo/kanji/kanji.service';


@Component({
  standalone: true,
  imports: [CommonModule, CharComponent, AsyncPipe, TagComponent],
  templateUrl: './detail.component.html'
})
export default class DetailComponent implements OnInit, OnDestroy {
  @Input() id!: number;

  kanji!: Kanji;
  kanjiSub: Subscription = new Subscription();

  constructor(private _kanjiService: KanjiService) { }

  ngOnInit(): void {
    this.kanjiSub = this._kanjiService.getById(this.id).subscribe({
      next: (kanji: Kanji) => {
        this.kanji = kanji;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.kanjiSub) {
      this.kanjiSub.unsubscribe();
    }
  }
}

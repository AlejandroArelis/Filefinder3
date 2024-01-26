import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CharComponent } from '../../../../shared/components/char/char.component';
import { Kanji } from '../../../../shared/Models/kanji.model';
import { Subscription } from 'rxjs';
import { KanjisService } from '../../../../shared/services/nihongo/kanjis.service';


@Component({
  standalone: true,
  imports: [CommonModule, CharComponent, AsyncPipe],
  templateUrl: './detail.component.html'
})
export default class DetailComponent implements OnInit, OnDestroy {
  @Input() id!: number;

  kanji!: Kanji;
  kanjiSub: Subscription = new Subscription();

  constructor(private _kanjisService: KanjisService) { }

  ngOnInit(): void {
    this.kanjiSub = this._kanjisService.getById(this.id).subscribe({
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

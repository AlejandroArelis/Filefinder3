import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Kanji } from '../../../shared/Models/kanji.model';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { KanjiService } from '../../../shared/services/nihongo/kanji/kanji.service';

@Component({
  selector: 'app-kanjis',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './kanjis.component.html',
  styles: ``
})
export default class KanjisComponent implements OnInit {

  kanjis$!: Observable<Kanji[]>;

  constructor(private _kanjiService: KanjiService) { }

  ngOnInit() {
    this.kanjis$ = this._kanjiService.get();
  }
}

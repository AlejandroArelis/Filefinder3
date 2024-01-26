import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Kanji } from '../../../shared/Models/kanji.model';
import { KanjisService } from '../../../shared/services/nihongo/kanjis.service';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-kanjis',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './kanjis.component.html',
  styles: ``
})
export default class KanjisComponent implements OnInit {

  kanjis$!: Observable<Kanji[]>;

  constructor(private _kanjisService: KanjisService) {
    console.log("jajaja");
  }

  ngOnInit() {
    this.kanjis$ = this._kanjisService.get();
  }
}

import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { KanjiService } from '@services/nihongo/kanji/kanji.service';
import { Kanji } from '@models/kanji.model';

@Component({
  selector: 'app-kanjis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kanjis.component.html',
  styles: ``,
})
export default class KanjisComponent {
  private _kanjiService = inject(KanjiService);

  kanjis: Signal<Kanji[] | undefined> = toSignal(this._kanjiService.get());
}

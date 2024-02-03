import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TagConfiguration } from '@models/tagConfiguration.model';
import { GenericService } from '@services/nihongo/kanji/generic.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styles: ``,
})
export class TagComponent {
  @Input() configuration!: TagConfiguration;
  showInput = false;

  private _genericService = inject(GenericService);

  async save(value: string) {
    try {
      this.showInput = false;

      this.configuration.actual = {
        kanjiId: this.configuration.parentId,
        value,
        name: value,
      };

      this.configuration.data?.push(
        await firstValueFrom(this._genericService.post(this.configuration))
      );
    } catch (e) {
      console.error(e);
    }
  }

  async delete(id: number | undefined) {
    try {
      this.configuration.actual = {
        id,
      };

      await firstValueFrom(this._genericService.delete(this.configuration));

      this.configuration.data = this.configuration.data?.filter(item => item.id != id);

    } catch (e) {
      console.error(e);
    }
  }
}

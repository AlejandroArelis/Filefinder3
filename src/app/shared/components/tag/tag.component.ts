import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Generic } from '@models/generic.model';
import { TagConfiguration } from '@models/tagConfiguration.model';
import { GenericService } from '@services/nihongo/kanji/generic.service';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.component.html'
})
export class TagComponent {

  private _toast = inject(ToastrService);

  @Input() configuration!: TagConfiguration;
  showInput = false;

  private _genericService = inject(GenericService);

  async save(value: string) {
    try {

      let exist = this.configuration.data?.some(item => item.value == value);

      if (!exist) {
        this.showInput = false;

        if (this.configuration.parentId) {

          this.configuration.actual = {
            kanjiId: this.configuration.parentId,
            value,
            name: value,
          };

          this.configuration.data?.push(
            await firstValueFrom(this._genericService.post(this.configuration))
          );
        } else {
          this.configuration.data?.push({ value, name: value });
        }
      } else {
        // Agregar mensaje de elemento repetido
        this._toast.warning(`"${value}" ya se encuentra en la lista`, 'Elemento repetido');
      }
    } catch (e) {
      console.error(e);
    }
  }

  async delete(tag: Generic) {
    try {
      if (this.configuration.parentId) {
        this.configuration.actual = tag;
        await firstValueFrom(this._genericService.delete(this.configuration));
        this.configuration.data = this.configuration.data?.filter(item => item.id != tag.id);
      } else {
        this.configuration.data = this.configuration.data?.filter(item => item.value != tag.value);
      }

      this._toast.success('Elemento eliminado');

    } catch (e) {
      console.error(e);
    }
  }
}

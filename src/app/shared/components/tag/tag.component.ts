import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Generic } from '@models/generic.model';
import { TagConfiguration } from '@models/tagConfiguration.model';
import { GenericService } from '@services/nihongo/kanji/generic.service';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tag.component.html',
})
export class TagComponent {
  private _toast = inject(ToastrService);

  @Input() configuration!: TagConfiguration;
  showInput = false;
  public genericValue: Generic = {text: "", value: ""};

  private _genericService = inject(GenericService);

  async save() {
    try {
      this.showInput = false;

      if(!this.configuration.repeat) {
        let exist = this.configuration.data?.some((item) => item.text == this.genericValue.text);

        if(exist) {
          throw new Error(`"${this.genericValue.text}" ya se encuentra en la lista`);          
        }
      }
      
      if (this.configuration.parentId) {
        console.log("que raro");
        this.configuration.actual = {
          kanjiId: this.configuration.parentId,
          value: this.configuration.generic ? this.genericValue.value : this.genericValue.text,
          text: this.genericValue.text
        };

        this.configuration.data?.push(
          await firstValueFrom(this._genericService.post(this.configuration))
        );
      } else {
        console.log("debe entrar aquí");
        this.configuration.data?.push({
          value: this.configuration.generic ? this.genericValue.value : this.genericValue.text,
          text: this.genericValue.text
        });
      }
    } catch (e:any) {
      console.error(e);
      this._toast.warning(e, 'Error');
    } finally {
      this.genericValue = {
        text: "",
        value: ""
      }
    }
  }

  async delete(tag: Generic) {
    try {
      if (this.configuration.parentId) {
        this.configuration.actual = tag;
        await firstValueFrom(this._genericService.delete(this.configuration));
        this.configuration.data = this.configuration.data?.filter(
          (item) => item.id != tag.id
        );
      } else {
        this.configuration.data = this.configuration.data?.filter(
          (item) => item.value != tag.value
        );
      }

      this._toast.success('Elemento eliminado');
    } catch (e) {
      console.error(e);
    }
  }
}

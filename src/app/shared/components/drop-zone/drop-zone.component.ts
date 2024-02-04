import { Component, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Component({
  selector: 'drop-zone',
  standalone: true,
  imports: [],
  templateUrl: './drop-zone.component.html',
  styles: ``
})
export class DropZoneComponent {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.opacity') private opacity = '1';
  @HostBinding('style.border') private border = 'none';

  @HostListener('dragover', ['$event']) public onDragOver(evt: any): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '0.8';
    this.border = 'dotted 2px #FF4D2A';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '1';
    this.border = 'none';
  }

  @HostListener('drop', ['$event']) public ondrop(evt: any): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity = '1';
    this.border = 'none';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

  selected(e:any) {
    e.preventDefault();
    e.stopPropagation();

    console.log(e)
  }
}

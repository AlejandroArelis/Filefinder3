import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Navbar } from '../../Models/navbar.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  @Input() config:Navbar = {
    title: "Deltapply",
    return: false,
    routes: [{
      text: "File finder",
      value: "filefinder"
    }, {
      text: "Nihongo",
      value: "nihongo"
    }]
  };
}

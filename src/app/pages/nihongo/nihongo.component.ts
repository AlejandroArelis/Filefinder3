import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Navbar } from '../../shared/Models/navbar.model';

@Component({
  selector: 'app-nihongo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './nihongo.component.html',
  styles: ``
})
export class NihongoComponent {
  config:Navbar = {
    title: "Nihongo",
    return: true,
    routes: [{
      text: "Kanjis",
      value: "kanjis"
    }, {
      text: "Verbos",
      value: "verbs"
    }, {
      text: "Sustantivos",
      value: "nouns"
    }]
  };
}

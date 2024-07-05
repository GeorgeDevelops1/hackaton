import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  isContactOpen: boolean = false;

  ContactOpen() {
    this.isContactOpen = true;
  }

  ContactClose() {
    this.isContactOpen = false;
  }
}
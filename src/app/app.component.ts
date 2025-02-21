import { Component, OnInit } from '@angular/core';
import { InfoComponent } from "./componentes/info/info.component";
import * as AOS from 'aos';
import { FooterComponent } from "./componentes/footer/footer.component";
import { HeroComponent } from "./componentes/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InfoComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 300,
      easing: 'ease-out-cubic'
    });
  }
}
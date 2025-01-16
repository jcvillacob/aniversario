import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from "./componentes/info/info.component";
import * as AOS from 'aos';
import { FooterComponent } from "./componentes/footer/footer.component";
import { HeroComponent } from "./componentes/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,        // Duración de la animación
      once: true,            // Si quieres que ocurra solo una vez
      offset: 300,           // Offset global en px
      easing: 'ease-out-cubic'
    });
  }
}
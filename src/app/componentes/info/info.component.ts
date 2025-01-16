import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  items = [
    {
      texto: `Mi amor, quiero decirte que me encanta que hayamos cumplido un año de novios. Te amo con todo mi corazón, y espero que cumplamos muchos más juntos. Este año hemos tenido altos y bajos, pero te aseguro que cada día te amo mucho más, hasta el punto de que no me imaginé nunca amar tanto a alguien y aun así siento que cada día te voy a seguir amando más.`,
      imagen: './fotos/IMG_0809.JPEG',
      animacion: 'fade-right',
    },
    {
      texto: `Eres lo más hermoso que existe. Me encanta cada parte de ti, tus cachetes, sabes lo que me gusta tu pelo, tu cara, tu cuerpo, esas nalgas preciosas, y eso sin mencionar que eres muy inteligente, y ese grandisimoooo sentido del humor con los chistes malos que cuentas.`,
      imagen: './fotos/IMG_0447.JPEG',
      animacion: 'fade-left',
    },
    {
      texto: `Siempre te voy a decir que espero que lo nuestro dure para siempre. Quiero que sepas que no importa lo que suceda, creo que podemos superarlo siempre y cuando estemos juntos, no importa qué, pero que estemos juntos. Prometo seguir mejorando y aprendiendo cada día para que podamos mantenernos firmes ante todo lo que pueda suceder, porque te amo mi princesita.`,
      imagen: './fotos/IMG_0321.JPEG',
      animacion: 'fade-up',
    },
    {
      texto: `Gracias por todo, mi vida. Por ser la persona maravillosa que eres. Un día me preguntaste si, para mí, eras un amanecer o un atardecer… y la verdad no pude escoger en el momento, pero quedé pensando y es porque aún ahora no puedo elegir, porque eres mi Amanecer y mi Atardecer. Eres lo primero que pienso cuando comienza cada día y eres lo último que imagino antes de acostarme, eres mi luz y mi calma. Eres el ciclo completo, eres perfecta. Te amo más de lo que las palabras pueden expresar, y estoy emocionado por todos los planes que nos esperan.`,
      imagen: './fotos/IMG_0836.JPEG',
      animacion: 'fade-up',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

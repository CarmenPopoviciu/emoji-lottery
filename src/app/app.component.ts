import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

const EMOJIS: Array<string> = ['🐶','🐱','🐭','🐹','🐰','🦊','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🦄','🐝','🐛','🦋','🐌','🐚','🐞','🐜','🐙','🦑','🦐','🦀','🐡','🐠','🐟','🐬','🐳','🍁','🍄','🌾','💐','🌷','🌹','🌺','🌸','🌼','🌻','🌔','🌙','🌎','🔥','🌪','🌈','☀','🌤','🌨','❄','☃','☔','🍩','🍪','🌰','🥜','🍯','🍡','🍧','🍨','🍦','☕','🍵','🍫','🍿','🎭','🎨','🎬','🎤','🎧','🎡','🎢','🎠','⛲','⛱','🏖','🏝','🛁','🎐','🎁','🎈','🎏','🔮','🔭','🕰','⌛️','⛩','🚁','🛶','⛵','🛰','🚀','🚌','🚕','⛸','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🍥','🥑','🍮','🍭','🍬','🍣','🥞','👣','🦎','🐾','🐉','🐲','🐑','🐩','🦉','🐣','🦃','🌴'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s linear', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.1s linear', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  emojis: Array<string> = EMOJIS;
  winner: String;
  searching = false;

  raffle() {
    this.searching = true;
    // delay a bit to make things more exciting
    setTimeout(() => {
      let rand = Math.floor(Math.random() * 121);
      this.winner = this.emojis[rand];
      this.searching = false;
    }, 3000);
  }
}

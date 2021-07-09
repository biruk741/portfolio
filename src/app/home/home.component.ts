import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('enterTrigger', [
    state('fadeIn', style({
        opacity: '1',
    })),
    transition('void => *', [style({opacity: '0'}), animate('500ms')])
    ])
  ]
})
export class HomeComponent implements OnInit {

  selected = 'about'

  constructor() { }

  ngOnInit(): void {
  }

}

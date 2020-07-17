import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js/src/typed.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Innovation.', 'Discovery.', 'You ❤️'],
      typeSpeed: 70,
      backSpeed: 70,
      showCursor: true,
      cursorChar: '|',
    };

    const typed = new Typed('.typed-element', options);

    AOS.init();
  }
}

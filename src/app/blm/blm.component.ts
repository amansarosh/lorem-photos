import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js/src/typed.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-blm',
  templateUrl: './blm.component.html',
  styleUrls: ['./blm.component.scss']
})
export class BlmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['# Black Lives Matter.'],
      typeSpeed: 70,
      showCursor: true,
      cursorChar: '|',
    };

    const typed = new Typed('.typed-element', options);

    AOS.init();
  }

}

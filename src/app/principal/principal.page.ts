import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0,
    initialSlide: 0,
    speed: 400,
  }

  constructor() { }

  ngOnInit() {
  }

}

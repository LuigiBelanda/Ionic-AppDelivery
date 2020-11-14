import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalheprod',
  templateUrl: './detalheprod.page.html',
  styleUrls: ['./detalheprod.page.scss'],
})
export class DetalheprodPage implements OnInit {

  slideConfig = {
    initialSlide: 0,
    slidesPerView: 3.3,
    speed: 400, 
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutustext : any='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit'
  constructor() { }

  ngOnInit(): void {
    window.scroll(
      {
        top:0,
        left:0,
      }
    )
  }

}

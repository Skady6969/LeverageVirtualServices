import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.scss']
})
export class Portfolio1Component implements OnInit {

  obj=[
    {
      'id': 1 ,
      'project_title': "title1" ,
      'img': "assets/images/Sam 1.png" ,
    },

    {
      'id': 2 ,
      'project_title': "title2" ,
      'img': "assets/img/port3.jpg" ,
    }
    ,

    {
      'id': 3 ,
      'project_title': "title3" ,
      'img': "assets/img/port4.jpg" ,
    },

    {
      'id': 4 ,
      'project_title': "title4" ,
      'img': "assets/img/port2.jpg" ,
    },

    {
      'id': 5 ,
      'project_title': "title5" ,
      'img': "assets/img/port5.jpg" ,
    },

    {
      'id': 6 ,
      'project_title': "title6" ,
      'img': "assets/img/port6.jpg" ,
    },]

    id:any;
  constructor(private activatedroute:ActivatedRoute) {
    this.id = this.activatedroute.snapshot.paramMap.get('id')
    console.log(this.id)
  }

  ngOnInit(): void {

  }

}

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
      'img': ["assets/img/port1.jpg" ,"assets/img/port2.jpg" ,"assets/img/port3.jpg" ,"assets/img/port4.jpg" ,"assets/img/port5.jpg" ,]

    },

    {
      'id': 2 ,
      'project_title': "title2" ,
      'img': ["assets/img/port1.jpg" ,"assets/img/port2.jpg" ,"assets/img/port3.jpg" ,"assets/img/port4.jpg" ,"assets/img/port5.jpg" ,]
    }
    ,

    {
      'id': 3 ,
      'project_title': "title3" ,
      'img': ["assets/img/port1.jpg" ,"assets/img/port2.jpg" ,"assets/img/port3.jpg" ,"assets/img/port4.jpg" ,"assets/img/port5.jpg" ,]
    },

    {
      'id': 4 ,
      'project_title': "title4" ,
      'img': ["assets/img/port1.jpg" ,"assets/img/port2.jpg" ,"assets/img/port3.jpg" ,"assets/img/port4.jpg" ,"assets/img/port5.jpg" ,]
    },

    {
      'id': 5 ,
      'project_title': "title5" ,
      'img': ["assets/img/port1.jpg" ,"assets/img/port2.jpg" ,"assets/img/port3.jpg" ,"assets/img/port4.jpg" ,"assets/img/port5.jpg" ,]
    },

    {
      'id': 6 ,
      'project_title': "title6" ,
      'img': ["assets/img/port1.jpg" ,"assets/img/port2.jpg" ,"assets/img/port3.jpg" ,"assets/img/port4.jpg" ,"assets/img/port5.jpg" ,]
    },
      {
        'id': 7 ,
        'project_title': "domain" ,
        'img': [ "assets/DOMAIN/1.png" , "assets/DOMAIN/2.png" , "assets/DOMAIN/3.png" , "assets/DOMAIN/4.png" , "assets/DOMAIN/5.png" ,
        "assets/DOMAIN/6.png" , "assets/DOMAIN/7.png" ,"assets/DOMAIN/8.png" , "assets/DOMAIN/9.png" , "assets/DOMAIN/10.png" ,
        "assets/DOMAIN/11.png" , "assets/DOMAIN/12.png" ,]
      },

      {
        'id': 8 ,
        'project_title': "gaia square" ,
        'img': ["assets/gaia SQUARE/1.png" , "assets/gaia SQUARE/2.png" , "assets/gaia SQUARE/3.png" , "assets/gaia SQUARE/4.png" , "assets/gaia SQUARE/5.png" ,
        "assets/gaia SQUARE/6.png" , "assets/gaia SQUARE/7.png" , "assets/gaia SQUARE/8.png" , "assets/gaia SQUARE/9.png" , "assets/gaia SQUARE/10.png" ,
      ]
      },

      {
        'id': 9 ,
        'project_title': "vego Square" ,
        'img': ["assets/vego/1.png" , "assets/vego/2.png" , "assets/vego/3.png" , "assets/vego/4.png" ,
        "assets/vego/5.png" , "assets/vego/6.png" , "assets/vego/7.png" , "assets/vego/8.png" ,
        "assets/vego/9.png" , "assets/vego/10.png" , ]
      },

      {
        'id': 10 ,
        'project_title': "title10" ,
        'img': "assets/img/port4.jpg" ,
      },

      {
        'id': 11 ,
        'project_title': "title11" ,
        'img': "assets/img/port5.jpg" ,
      },

      {
        'id': 12 ,
        'project_title': "title12" ,
        'img': "assets/img/port6.jpg" ,
      }
    ]




    id:any;
    filtered_obj:any;

  constructor(private activatedroute:ActivatedRoute) {
    this.id = this.activatedroute.snapshot.paramMap.get('id')
    console.log(this.id)
  }

  ngOnInit(): void {
    this.filtered_obj = this.obj.filter((id:any)=> id.id == this.id)
    console.log(this.filtered_obj)
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

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

    obj2= [
      {
        'id': 7 ,
        'project_title': "title7" ,
        'img': "assets/img/port1.jpg" ,
      },

      {
        'id': 8 ,
        'project_title': "title8" ,
        'img': "assets/img/port2.jpg" ,
      },

      {
        'id': 9 ,
        'project_title': "title9" ,
        'img': "assets/img/port3.jpg" ,
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





  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openproject(id:any){
    this.router.navigate(['/portfolio1/'+id])
  }

}

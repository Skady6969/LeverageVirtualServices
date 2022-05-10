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
      'project_title': "No File" ,
      'img': "assets/image/nofile.png" ,
    }
    ,

    {
      'id': 3 ,
      'project_title': "No File" ,
      'img': "assets/image/nofile.png" ,
    },

    {
      'id': 4 ,
      'project_title': "No File" ,
      'img': "assets/image/nofile.png" ,
    },

    {
      'id': 5 ,
      'project_title': "No File" ,
      'img': "assets/image/nofile.png" ,
    },

    {
      'id': 6 ,
      'project_title': "No File" ,
      'img':"assets/image/nofile.png" ,
    },]

    obj2= [
      {
        'id': 7 ,
        'project_title': "DOMAIN" ,
        'img': "assets/DOMAIN/5.png" ,
      },

      {
        'id': 8 ,
        'project_title': "GAIA SQUARE" ,
        'img': "assets/gaia SQUARE/2.png" ,
      },

      {
        'id': 9 ,
        'project_title': "VEGO SQUARE" ,
        'img': "assets/vego/1.png" ,
      },

      {
        'id': 10 ,
        'project_title': "No File" ,
        'img': "assets/image/nofile.png" ,
      },

      {
        'id': 11 ,
        'project_title': "No File" ,
        'img': "assets/image/nofile.png" ,
      },

      {
        'id': 12 ,
        'project_title': "No File" ,
        'img': "assets/image/nofile.png" ,
      }

    ]





  constructor(private router:Router) { }

  ngOnInit(): void {
    window.scroll(
      {
        top:0,
        left:0,
      }
    )
  }

  openproject(id:any){
    this.router.navigate(['/portfolio1/'+id])
  }

}

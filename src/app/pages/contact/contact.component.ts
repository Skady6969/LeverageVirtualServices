import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstname:any;
  lastname:any;
  email:any;
  phone:any;
  message:any;

  constructor() { }

  ngOnInit(): void {
    window.scroll(
      {
        top:0,
        left:0,
      }
    )
  }

  onSubmit(){

    let data = {
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      phone:this.phone,
      message:this.message,
    }

    emailjs.send('service_h7x0ouo', 'template_sba18g6',data , '2Oo1jXMFe9Zod1tYm').then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      alert(result.text)
      this.firstname='';
      this.lastname='';
      this.email='';
      this.phone='';
      this.message='';

    }, (error) => {
      console.log(error.text);
      alert(error.text)

    })
  }

}

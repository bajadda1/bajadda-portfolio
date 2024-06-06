import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  social!:Array<{id:number,url:string,icon:string}>
  date:Date=new Date()

  ngOnInit(): void {
    this.social=[
      {
        id:1,
        url:"https://www.linkedin.com/in/bajadda-ahmed-0611ba24b/",
        icon:"fa fa-linkedin"
      },
      {
        id:2,
        url:"https://github.com/bajadda1",
        icon:"fa fa-github"
      },
      {
        id:3,
        url:"https://www.facebook.com/profile.php?id=100029346104064&locale=fr_FR",
        icon:"fa fa-facebook-f"
      },
      {
        id:4,
        url:"https://www.instagram.com/",
        icon:"fa fa-instagram"
      },
    ]
  }
}

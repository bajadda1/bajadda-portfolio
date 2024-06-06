import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit{
  education!:Array<{id:number,year:string,school:string,subject:string,location:string}>
  experiences!:Array<{id:number,title:string,year:string,startup:string,location:string,description:Array<string>}>
  ngOnInit(): void {
    this.education=[
      {
        id:1,
        year:"2022-Present",
        school:"Hassania School of Public Works (EHTP)",
        subject:"2nd year Geographic information Systems (GIS)",
        location:"CASABLANCA"
      },
      {
        id:2,
        year:"2019-2021",
        school:"Preparatory Classes for Engineering Schools (CPGE)",
        subject:"Mathematics Physics (MP)",
        location:"Errachidia"
      },
      {
        id:3,
        year:"2018-2019",
        school:"Lycee sidi Ahmed Ben Nacer Zagora",
        subject:"Mathematics Science-A (SM-A)",
        location:"ZAGORA"
      },
    ]
    this.experiences=[
      {
        id: 1,
        title: "Web Application for Local Event Management",
        year: "2023",
        startup: "ZJSConsulting",
        location: "Rabat, Morocco",
        description: [
          "This project focused on my professional initiation internship and centered around the theme of developing a web application for managing local events on a map. As the title suggests, the goal was to create a web application capable of making the exploration and discovery of local events easier by visually displaying them on an interactive map.",
          "The application not only allowed users to discover interesting events but also actively participate by providing them with the possibility to create their own events."
        ]
      }
    ]

  }
}

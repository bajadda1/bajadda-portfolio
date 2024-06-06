import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  myProjects!:Array<{id:number,imgSrc:string,name:string,date:Date,description:string,url:string,github:string} >

  ngOnInit(): void {
    this.myProjects=[
      {
        id:0,
        imgSrc:"assets/my_projects/event_location.png",
        name:"event-location",
        date:new Date(2023,9,1),
        description:"\"Event-Location\" is a web application built with Vue.js, Leaflet, and the OpenStreetMap (OSM) API. It facilitates easy searching for event locations",
        url:"https://eventlocation-a8625.firebaseapp.com/#/",
        github:"https://github.com/bajadda1/Local-Events-using-leflet-vue3"
      },
      {
        id:0,
        imgSrc:"assets/my_projects/geo.jpg",
        name:"Geoportail",
        date:new Date(2024,5,20),
        description:"This project involves the development of a Geoportal for the Grand Casablanca region using the ArcGIS Maps SDK for JavaScript",
        url:"",
        github:"https://github.com/bajadda1/geoportail"
      },
      {
        id:0,
        imgSrc:"assets/my_projects/erecruitement.png",
        name:"E-Recruitement",
        date:new Date(2024,1,21),
        description:"This project is an ASP.NET MVC web application for an E-Recruitment system. It features a comprehensive platform where recruiters can manage job offers and candidates can search for jobs and apply to them. The system is divided into three main sections: Job Offers, Recruiter Space, and Candidate Space",
        url:"",
        github:"https://github.com/bajadda1/e-recruitement-asp.net-mvc"
      },
      {
        id:1,
        imgSrc:"assets/my_projects/calculator_web.png",
        name:"calculator",
        date:new Date(2023,2,21),
        description:"This project is a simple calculator built using Vue 3  and Tailwind CSS . It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division",
        url:"https://calculator-eeac1.firebaseapp.com/",
        github:"https://github.com/bajadda1/calculator"
      },
      {
        id:2,
        imgSrc:"assets/my_projects/password.png",
        name:"password generator",
        date:new Date(2023,1,10),
        description:" A code generator using Vue 3 and Tailwind CSS is a web application that allows users to generate custom code snippets quickly and easily based on user criteria",
        url:"",
        github:"https://github.com/bajadda1/code_generator"
      },
      //add to github and deploy it
      {
        id:3,
        imgSrc:"assets/my_projects/country_api.png",
        name:"countries API",
        date:new Date(2023,9,30),
        description:"is a web project that utilizes Vue 3 and Tailwind CSS to fetch and display information about countries from a public API. With a minimalist design powered by Tailwind CSS",
        url:"",
        github:"https://github.com/bajadda1/calculator"
      },

      {
        id:5,
        imgSrc:"assets/my_projects/tic_tac_toe_swing.png",
        name:"Tic Tac Toe",
        date:new Date(2023,10,21),
        description:"Tic Tac Toe is a classic two-player game where each player takes turns marking spaces on a 3x3 grid.I develop it using java swing GUI",
        url:"",
        github:"https://github.com/bajadda1/tic_tac_toe"
      },
      //demo on video
      {
        id:0,
        imgSrc:"assets/my_projects/calculator_swing.png",
        name:"calculator(swing)",
        date:new Date(2023,11,25),
        description:"This is a simple calculator application built using Java Swing. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division.",
        url:"",
        github:"https://github.com/bajadda1/calculator"
      },

      //demo on video


      {
        id:0,
        imgSrc:"assets/my_projects/go.jpg",
        name:"go Game",
        date:new Date(2022,2,10),
        description:"Go Game in C.A straightforward implementation of the classic strategy game Go in C.This project offers a basic text-based interface for playing against an AI opponent or another player.",
        url:"",
        github:"https://github.com/bajadda1/go-game-using-c"
      },
      {
        id:0,
        imgSrc:"assets/my_projects/BMS.png",
        name:"Bank Management System",
        date:new Date(2022,5,20),
        description:"Bank Management System implemented in C++ using Object-Oriented Programming (OOP) principles. This project provides a simple yet effective way to manage bank accounts, perform transactions, and calculate interest rates.",
        url:"",
        github:"https://github.com/bajadda1/go-game-using-c"
      },




    ]
  }
}

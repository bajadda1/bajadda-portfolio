import {Component, OnInit} from '@angular/core';
import 'typed.js'
import Typed from "typed.js";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  typed!:Typed
  constructor(private activatedRoute:ActivatedRoute) {
  }

  jumpToSection(section: string | null){
    // @ts-ignore
    document.getElementById(section).scrollIntoView({behavior:"smooth"})
  }

  ngOnInit(): void {
    this.typed=new Typed('.span-text',{
      strings:['web developer','GIS engineer'],
      typeSpeed:150,
      backSpeed:150,
      loop:true
    });
    this.activatedRoute.fragment.subscribe((data)=>{
      console.log(data)
      this.jumpToSection(data);
    })

  }

}

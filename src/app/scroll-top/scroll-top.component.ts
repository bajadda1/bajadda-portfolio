import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.css'
})
export class ScrollTopComponent implements OnInit{
  ngOnInit(): void {}
  scrollUp(){
    window.scrollTo({top:0,behavior:'smooth'})
  }


}

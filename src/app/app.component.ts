import {Component, OnInit} from '@angular/core';
import  AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'My_Portfolio';
  ngOnInit(): void {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'linear', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // offset (in px) from the original trigger point
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }
}

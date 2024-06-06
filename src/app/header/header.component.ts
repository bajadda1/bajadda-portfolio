import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sections: string[] = []; // Pass the IDs of your sections as an input

  links!: Array<{ id: number, url: string, fragment: string, icon: string }>;
  clickedLinkIndex: number = 0;

  ngOnInit(): void {
    this.links = [
      { id: 0, url: 'home', fragment: 'home', icon: 'fa fa-home' },
      { id: 1, url: 'about', fragment: 'about', icon: 'fa fa-user' },
      { id: 2, url: 'skills', fragment: 'skills', icon: 'bi-briefcase-fill' },
      { id: 3, url: 'resume', fragment: 'resume', icon: 'fa fa-regular fa-file' },
      { id: 4, url: 'portfolio', fragment: 'portfolio', icon: 'fa fa-regular fa-address-book' },
      { id: 5, url: 'contact us', fragment: 'contact', icon: 'bi bi-envelope-at-fill' }
    ];

    // Set up Intersection Observer for each section
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          const sectionIndex = this.sections.findIndex(section => section === sectionId);
          if (sectionIndex !== -1) {
            this.clickedLinkIndex = sectionIndex;
          }
        }
      });
    }, { threshold: 0.3}); // Change threshold as needed

    this.sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  }

  handleClick(ind: number): void {
    this.clickedLinkIndex = ind;
    const sectionId = this.sections[ind];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

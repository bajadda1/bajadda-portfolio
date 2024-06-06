import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projectInfo!: {id:number,imgSrc:string,name:string,date:Date,description:string,url:string,github:string} ;
}

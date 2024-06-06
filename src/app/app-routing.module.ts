import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {SkillsComponent} from "./skills/skills.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path:'bajadda',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: 'bajadda',
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

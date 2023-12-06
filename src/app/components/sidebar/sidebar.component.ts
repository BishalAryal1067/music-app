import { Component } from '@angular/core';
import {sidebarNavigation} from "./navigation"


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  navItems:sidebarNavigation = [
    {title:'Home', path:'', icon:'fa-solid fa-house '},
    {title:'Search', path:'search', icon:'fa-solid fa-magnifying-glass'},
    {title:'My Playlist', path:'playlist', icon:'fa-solid fa-music'}
  ]
}

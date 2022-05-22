
/*------------------------------------------------------------------------*/
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/docksavailable'>Station disponible</a></li>
      <li><a class='nav-link' routerLink='/notworkingstation'>Station non fonctionnelle</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {

  pageTitle: string = 'Vélib';
}

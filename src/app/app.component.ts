import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="opacity:0.6;">
  <a class="navbar-brand" href="#" style="color:black;font-weight: bold;">I<small>nsta</small>P<small>icture</small></a>
   <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" [routerLink]="['/welcome']" style="color:black;font-weight: bold;">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['/picture']" style="color:black;font-weight: bold;">Pictures list</a>
      </li>
    </ul>
    <span class="navbar-text">
      Welcome on InstaPic
    </span>
  </div>
</nav>

<div class="container">
  <router-outlet></router-outlet>
</div>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskMCA';
}

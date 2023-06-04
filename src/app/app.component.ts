import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularPractice';
  isHomeApp: boolean = false;
  arr: Number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor(private router: Router) {
    router.events.subscribe((_x) => {
      if (router.url == '/') {
        this.isHomeApp = true;
      } else this.isHomeApp = false;
    });
  }

  isRight = (i: number) => {
    if (i != this.arr.length) {
      if ((i + 1) % 4 != 0) {
        return false;
      }
    }
    return true;
  };

  onSelectProject(i: number) {
    console.log(i);
    if (i == 0) {
      this.router.navigate(['food-cart']);
    }
  }
}

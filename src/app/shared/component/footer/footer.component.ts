import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public showChotbot;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showChotbot = !this.showChotbot;
  }
  toggleMenuandroute() {
    window.scrollTo(0, 0)
    this.showChotbot = !this.showChotbot;
  }
  


}

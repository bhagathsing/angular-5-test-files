import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isOpen = false;
  constructor() { }

  ngOnInit() {
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}

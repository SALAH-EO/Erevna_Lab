import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav:ToolbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}

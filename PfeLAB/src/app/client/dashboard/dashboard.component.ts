import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service' ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public nav:ToolbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}

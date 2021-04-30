import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  goToPreschoolProject(){
    this._route.navigateByUrl("/parklandpreschoolproject");
  }

  goToInventoryApp(){
    this._route.navigateByUrl("/homeinventoryapp");
  }

}

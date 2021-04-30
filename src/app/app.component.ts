import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // pp_project = false;
  // inventory_proj = false;
  // not_found = false;
  // baseUrl = environment.baseUrl;
  
  // constructor(private _router: Router){}

  // ngOnInit(): void {  
  //   let currentUrl = window.location.href;
  //   if (currentUrl.search('homeinventoryapp') != -1) {
  //     this.inventory_proj = true;
  //   } else if (currentUrl.search('parklandpreschoolproject') != -1) {
  //     this.pp_project = true;
  //   } else if (currentUrl == this.baseUrl){
  //     this.pp_project = false;
  //     this.inventory_proj = false;
  //     this.not_found = false;
  //   } else {
  //     this.not_found = true;
  //   }

  //   console.log(this.pp_project);
  //   console.log(this.inventory_proj);
  // }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // pp_project = false;
  // inventory_proj = false;
  // not_found = false;
  // baseUrl = environment.baseUrl;
  
  // constructor(private _router: Router){}

  ngOnInit(): void {  
    // let currentUrl = window.location.href;
    // if (currentUrl.search('homeinventoryapp') != -1) {
    //   this.inventory_proj = true;
    // } else if (currentUrl.search('parklandpreschoolproject') != -1) {
    //   this.pp_project = true;
    // } else if (currentUrl.search('home') != -1){
    //   this.pp_project = false;
    //   this.inventory_proj = false;
    //   this.not_found = false;
    // } else {
    //   this.not_found = true;
    // }

    // console.log(this.pp_project);
    // console.log(this.inventory_proj);
  }
}


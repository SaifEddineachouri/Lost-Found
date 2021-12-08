import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarfixed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 50){
      this.navbarfixed = true;
    } else{
      this.navbarfixed =  false ; 
    }
  }


}

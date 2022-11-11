import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  State1:  String;
  State2:String;
  constructor() {
   

   }

  ngOnInit(): void {
  }
  getClass1() :void{
    console.log(" active link");
   this. State1="active"
    this.State2="inactive"
  }
  getClass2() :void{
    this.State1="inactive"
    this.State2="active"
  }



}

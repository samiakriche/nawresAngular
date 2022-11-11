import { Component, OnInit } from '@angular/core';
import { SocietesService } from '../societe.service';

interface SOCIETES {
  id: Number;
  name: String;
  addresse: String;
  
}



@Component({
  selector: 'app-societes',
  templateUrl: './societes.component.html',
  styleUrls: [],
})
export class SocietesComponent implements OnInit {
  Societes:  SOCIETES[];
  constructor(private societesService: SocietesService) { 
    
    
  }

  ngOnInit(): void {
    this.societesService.getAllData()
    .subscribe(data => {
      console.log(data)
      this.Societes=data;
    })
  }
  



}

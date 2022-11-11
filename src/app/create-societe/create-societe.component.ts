import { Component, OnInit } from '@angular/core';
import { SocietesService } from '../societe.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-societe',
  templateUrl: './create-societe.component.html',
  styleUrls: ['bootstrap.min.css']
})
export class CreateSocieteComponent implements OnInit {
  
  constructor(private societesService: SocietesService) { }
   name:string;
   addresse:string;
   PhotoFileName:string;
   PhotoFilePath:string;
  ngOnInit(): void {
  }
  addSociete():void{
    console.log(this.name);
    console.log(this.addresse);
     this.societesService.addSociete(this.name,this.addresse).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.societesService.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.societesService.PhotoUrl+this.PhotoFileName;
    })
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPicture } from './ipicture';
import { PictureService } from './picture.service';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent implements OnInit {
  pageTitle:string='Pictures';
  imageWidth= 150;
  
  errorMessage:string='';


  @Output() public emiter=new EventEmitter<string>();


  
  pageNumber:number=0;

  constructor(private pictureService:PictureService) {}


  allpictures: IPicture[] = [];
  pictures: IPicture[]=[];

  ngOnInit(): void {
    this.pictureService.getPictures().subscribe({
      next: pictures=>{ this.allpictures=pictures;
        this.pictures=this.getSlice();
      },
      error:err=>this.errorMessage=err
    });
  }
  getSlice(): IPicture[] {
    return this.allpictures.slice(23*this.pageNumber,23*(this.pageNumber+1));
  }

  next(){
    this.pageNumber++;
    this.pictures=this.getSlice();
  }

  previous(){
    if(this.pageNumber!=0){
      this.pageNumber--;
    }
    this.pictures=this.getSlice();

  }
  

}

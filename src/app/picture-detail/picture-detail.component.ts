import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Picture } from '../picture/picture';
import { PictureService } from '../picture/picture.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})


export class PictureDetailComponent implements OnInit {

  pageTitle: string = 'Details for picture with id:';
  errorMessage: string = '';
  picturee!: Picture;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pService: PictureService) { }

  ngOnInit(): void {
    let id =this.route.snapshot.paramMap.get('id');
    this.pService.getPicture(id).subscribe({
      next: picture => {
        this.picturee = picture
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/picture']);
  }

  onDelete(): void {
    if (confirm("Are you sure you want to delete this picture?")) {
      let id = this.route.snapshot.paramMap.get('id');
      this.pService.deletePicture(id).subscribe(
        () => console.log("Picture with id = " + id + "is deleted"),
        (err) => console.log(err)
      );
      // this.onBack();
    }
  }
  
}

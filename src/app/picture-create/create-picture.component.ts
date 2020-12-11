import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Picture } from '../picture/picture';
import { PictureService } from '../picture/picture.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-create-picture',
  templateUrl: './create-picture.component.html',
  styleUrls: ['./create-picture.component.css']
})
export class CreatePictureComponent implements OnInit {
  picture!: Picture;

  public pictureForm: FormGroup=new FormGroup({
    id: new FormControl('',[Validators.required]),
    title: new FormControl(''),
    url: new FormControl('',[Validators.required]),
    albumid: new FormControl(''),
    thumbnail: new FormControl('',[Validators.required])
  });

  constructor(private pictureService: PictureService,
    private router: Router) { }

  ngOnInit(): void {
  }


  onCreatePic(): void {
    this.picture=new Picture(this.pictureForm.controls.albumid.value,
      this.pictureForm.controls.id.value,
      this.pictureForm.controls.title.value,
      this.pictureForm.controls.url.value,
      this.pictureForm.controls.thumbnail.value
      );

    this.pictureService.createPicture(this.picture).subscribe(
      data => console.log('success', data),
      (err) => console.log(err)
    );
      this.onBack();
  }

  onBack(): void {
    this.router.navigate(['/picture']);
  }
}



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Picture } from '../picture/picture';
import { PictureService } from '../picture/picture.service';

@Component({
  selector: 'app-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.css']
})
export class EditPictureComponent implements OnInit {

  picture!: Picture;
  errorMessage:string='';

  public editForm: FormGroup=new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    url: new FormControl(''),
    albumid: new FormControl(''),
    thumbnail: new FormControl('')
  });

  constructor(private router:Router,
    private pService: PictureService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.pService.getPicture(id).subscribe({
      next: picture => {
        this.picture = picture;
        this.editForm.controls.id.setValue(this.picture.id);
        this.editForm.controls.albumid.setValue(this.picture.albumId);
        this.editForm.controls.title.setValue(this.picture.title);
        this.editForm.controls.url.setValue(this.picture.url);
        this.editForm.controls.thumbnail.setValue(this.picture.thumbnailUrl);
      },
      error: err => this.errorMessage = err
    });
  
  }

  saveEdited(){
    this.picture=new Picture(this.editForm.controls.albumid.value,
      this.editForm.controls.id.value,
      this.editForm.controls.title.value,
      this.editForm.controls.url.value,
      this.editForm.controls.thumbnail.value
      );
    this.pService.editPicture(this.picture).subscribe(()=>this.onBack());
  }

  onBack(): void {
    this.router.navigate(['/picture/'+this.picture.id]);
  }

}

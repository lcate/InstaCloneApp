import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PictureComponent } from './picture/picture.component';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { PictureDetailComponent } from './picture-detail/picture-detail.component';
import { CreatePictureComponent } from './picture-create/create-picture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPictureComponent } from './picture-edit/edit-picture.component';
import { PictureDetailGuard } from './picture-detail/picture-detail.guard';
import { PictureEditGuard } from './picture-edit/picture-edit.guard';
import { KomponentComponent } from './komponent/komponent.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PictureComponent,
    PictureDetailComponent,
    CreatePictureComponent,
    EditPictureComponent,
    KomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'picture', component: PictureComponent, 
      children:[
        {path:'create',component:CreatePictureComponent}

      ],},     
      {path:'picture/:id', canActivate:[PictureDetailGuard],component: PictureDetailComponent},
      {path:'picture/edit/:id',canActivate:[PictureEditGuard],component:EditPictureComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

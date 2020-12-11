import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { IPicture } from './ipicture';
import {catchError,tap} from 'rxjs/operators'
import { Picture } from './picture';

@Injectable({
  providedIn: 'root'
})

export class PictureService {

  private picturesUrl='http://jsonplaceholder.typicode.com/photos';

  constructor(private http:HttpClient) { }

  getPictures():Observable<IPicture[]>{
    return this.http.get<IPicture[]>(this.picturesUrl).pipe(
      //RxJS pipeable operator that returns identical Observable as source Observable and can be used to perform side effect such as logging each values emitted by source Observable 
      tap(data=>JSON.stringify(data)),
      catchError(this.handleError)
    );
  }

  getPicture(id:any):Observable<Picture>{
    return this.http.get<Picture>(this.picturesUrl+"/"+id).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deletePicture(id:any):Observable<void>{
    return this.http.delete<void>(this.picturesUrl+"/"+id).pipe(
      catchError(this.handleError)
    );
  }

  createPicture(picture:Picture):Observable<Picture>{
    return this.http.post<Picture>(this.picturesUrl, picture);
  }

  editPicture(picture:Picture):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({'Contnt-Type':'aplication/json'})};
      return this.http.put(this.picturesUrl+"/"+picture.id,picture,httpOptions).pipe(
        tap(updatedMovie=>console.log('updated movie='+JSON.stringify(updatedMovie))),
        catchError(this.handleError)
      );
    }
  

  //error pri http
  private handleError(error: HttpErrorResponse) {
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=`An error occured ${error.error.message}`;
    }
    else{
      errorMessage=`Server  returned code ${error.status}, error message is: ${error.message}`;
    }
    console.error(error.message);
    return throwError(errorMessage);
  } 
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureDetailGuard implements CanActivate {
constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let id= +route.url[1].path;
    if(isNaN(id) || id<1 || id>5000){
      alert("Invalid picture id");
      this.router.navigate(['/picture']);
      return false;
    }
    return true;
  }
  
}

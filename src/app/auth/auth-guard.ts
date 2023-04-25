import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authSvs : AuthService, private route: Router){}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authSvs.isAuth()){
            return true
        }else{
            return this.route.navigate(["/login"])
        }
    }
    
}
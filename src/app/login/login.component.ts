import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    private user:string;
    private password:string;

    private entrar:boolean;
    mensaje:string;
    
    constructor(private _loginService:LoginService,private router:Router){
        
    }

    ngOnInit(){
        
    }    

    hacerLogin(){

        this.entrar = this._loginService.logeo(this.user,this.password);
        if(this.entrar){
            this.router.navigate(['']);
        }else{
            this.mensaje='Usuario o Password Invalidos';
        }

    }


    ngOnDestroy(){
        
    }    
}
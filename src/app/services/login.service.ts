import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    private usuario:string='Marco234';
    private contrasena:string = 'mx12345';

    constructor(){
        
    }

    logeo(user: string, password: string): boolean{
        return user == this.usuario && password == this.contrasena;        
    }

}
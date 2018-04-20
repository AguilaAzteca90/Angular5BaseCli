import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";



@Injectable()
export class GitHubService {

   // private _getUsersUrl:string = 'https://api.github.com/users';
    private _getUsersUrl:string = 'http://10.11.1.100:8080/users';
    
    /**"HttpClient" es un sericio que ya viene con la libreria de Angular */
    constructor(private _httpClient: HttpClient){

    }

    getUserInfo(UserName: string){
       /** */
       return this._httpClient.get(`${this._getUsersUrl}/${UserName}`,{responseType:'json'})
                       .map((x:any) => {
                           let gitHubObj = new GitHubModel();
                           gitHubObj.avatar_url = x.avatar_url;
                           gitHubObj.login = x.login;
                           gitHubObj.name = x.name;
                           gitHubObj.followers = x.followers;
                           gitHubObj.following = x.following;
                           return gitHubObj;
                       })
                       .catch(this.handleError);  
    }

    handleError(error:any){
         console.log(`Error: ${error}`);
         return Observable.throw(error.json() || 'Server Error');
    }

}
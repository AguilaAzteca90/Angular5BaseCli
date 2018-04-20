import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  gitHubData: GitHubModel;

  gitHubDataList: Array<GitHubModel>;

  /**Con esto ya estamos inyectando el servicio que creamos en la carpeta services
   * que es la clase "GitHubService"
   */
  constructor(private _gitHubService: GitHubService) {
      this.gitHubDataList = new Array<GitHubModel>();
   }

  ngOnInit() {

  }

  onSearchUser(userName: string){
    this._gitHubService.getUserInfo(userName).subscribe(
      value => {
        console.log(`Usuario: ${value.login}`);
        console.log(`avatar_url: ${value.avatar_url}`);
        console.log(`name: ${value.name}`);
        console.log(`followers: ${value.followers}`);
        console.log(value);

        /**Comunicacion Padre a Hijo 
        this.gitHubData = new GitHubModel();
        this.gitHubData = value;*/
        this.gitHubDataList.push(value);
      },
      error => {
         console.log(`Error: ${error}`);
      }           
    );
  }

  //Metodo de eliminacion de Usuario
  onBorrarUser(valor : any){
     console.log(valor.login);
     this.gitHubDataList=this.gitHubDataList.filter(x => {
         return x != valor; 
     });
  }

}

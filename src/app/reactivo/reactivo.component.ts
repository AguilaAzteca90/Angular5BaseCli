import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  newColor: string = '#ff4d4d';

  constructor(private _colorService: ColorService) { }

  ngOnInit() {
     this._colorService.getEventColor().subscribe(value => this.newColor = value);
  }

}

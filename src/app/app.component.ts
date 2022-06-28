import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ids: number[] = [];
  ultimoId: number = 0;
  texto: string = '';

  add(){
    this.ultimoId++;
    this.ids.push(this.ultimoId);
  }

  remover(id:number){
    this.ids.splice(this.ids.indexOf(id), 1);
  }

}

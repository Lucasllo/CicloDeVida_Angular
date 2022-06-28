import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit, OnChanges {

  @Input() texto: string | undefined;

  contador:number = 0;

  constructor() { } // os contrutores leem os @Inputs antes de serem preenchidos pelos componentes-pais

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void { //onChanges fica verificando mudanças que ocorrem nos @Inputs
    console.log(`change: ${JSON.stringify(changes)}`)
  }

  incrementar(){
    this.contador++;
  }
}

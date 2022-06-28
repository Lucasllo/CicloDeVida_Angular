import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit, OnDestroy {

  @Input() id: number | undefined;
  intervalo: NodeJS.Timeout | undefined;

  ngOnInit(): void {
    this.intervalo = setInterval(()=>{
      console.log(`componente #${this.id} recarregado`)
    }, 2000)
  }

  ngOnDestroy(): void {
  clearInterval(this.intervalo);
  }
}

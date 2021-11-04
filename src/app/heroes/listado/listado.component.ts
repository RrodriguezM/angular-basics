import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {


  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    const temp = this.heroes.pop() || '';
    this.heroeBorrado = temp
    console.log('%clistado.component.ts line:14 heroeBorrado', 'color: #007acc;', this.heroes);
  }
}

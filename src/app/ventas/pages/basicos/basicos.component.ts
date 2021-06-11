import { Component } from '@angular/core';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'juan';
  nombreUpper: string = 'JUAN';
  nombreCompleto: string = 'jUaN anToNiO';

  fecha: Date = new Date();   //fecha de hoy

}

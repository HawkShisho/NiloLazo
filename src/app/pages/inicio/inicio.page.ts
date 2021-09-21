import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'fitness',
      name: 'Alimentacion',
      redirecTo: '/alimentacion'
    },
    {
      icon: 'barbell',
      name: 'Deporte',
      redirecTo: '/deporte'
    },
    {
      icon: 'ear',
      name: 'Meditacion',
      redirecTo: '/meditacion'
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  ocultarMenu(){
    this.menuController.close('first');
  }
}


import { Component } from '@angular/core';
import { HeaderPage } from '../../shared/components/HeaderPage';
import { TablePersonal } from '../../shared/components/TablePersonal'
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-receptionist',
  imports: [HeaderPage, TablePersonal
  ],
  template:`
  <div class="container">
  <div class ="relative">
    <header-page
      [TITLE]="'Gestion de Recepcionistas'"
      [DESCRIPTION]="'Administre las credenciales y roles de su equipo administrativo.'"
    />
      <button
          type="button"
          (click)="agregarRecepcionista()"
                  class="absolute right-0 top-0 bg-slate-900 text-white
                 px-4 py-2 rounded-md text-sm font-medium
                 hover:bg-slate-800 transition"
        >
          <span class="text-lg">+</span>
          Agregar Personal
        </button>
    <table-personal
      [ROL]="ROL"
      [DATA]="DATA"
    />
  
  </div>
  </div>
  `,
})
export class ManageReceptionist {

  readonly ROL:number = 0;

  readonly DATA = [
    {
      "id": 1,
      "name": "Juan Perez",
      "email": "juan.perez@example.com",
      "turno": "Matutino",
    },
    {
      "id": 2,
      "name": "Maria Lopez",
      "email": "maria.lopez@example.com",
      "turno": "Vespertino",
    },
    {
      "id": 3,
      "name": "Carlos Sanchez",
      "email": "carlos.sanchez@example.com",
      "turno": "Nocturno",
    }
  ]
  constructor(private router: Router) {}
  agregarRecepcionista() {
    this.router.navigate(['/RecepcionistAdd']);
  }
}

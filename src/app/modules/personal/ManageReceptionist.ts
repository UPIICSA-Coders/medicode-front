
import { Component } from '@angular/core';
import { HeaderPage } from '../../shared/components/HeaderPage';
import { TablePersonal } from '../../shared/components/TablePersonal';

@Component({
  selector: 'app-manage-receptionist',
  imports: [HeaderPage, TablePersonal
  ],
  template:`
  <div class="container">
    <header-page
      [TITLE]="'Gestion de Recepcionistas'"
      [DESCRIPTION]="'Administre las credenciales y roles de su equipo administrativo.'"
    />
    <table-personal
      [ROL]="ROL"
      [DATA]="DATA"
    />
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
}

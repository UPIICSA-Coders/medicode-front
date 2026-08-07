
import { Component } from '@angular/core';
import { HeaderPage } from '../../shared/components/HeaderPage';
import { TablePersonal } from '../../shared/components/TablePersonal';

@Component({
  selector: 'app-manage-doctors',
  imports: [HeaderPage,TablePersonal
  ],
  template:`
  <div class="container">
    <header-page
      [TITLE]="'Gestion de Doctores'"
      [DESCRIPTION]="'Administre las credenciales y roles de su equipo médico.'"
    />
    <table-personal
      [ROL]="ROL"
      [DATA]="DATA"
    />
  </div>
  `,
})
export class ManageDoctors {
  readonly ROL:number = 1;

  readonly DATA = [
    {
      "id": 1,
      "name": "Juan Perez",
      "email": "juan.perez@example.com",
      "turno": "Matutino",
      "especialidad": "Cardiología",
      "cedula": "123456789"
    },
    {
      "id": 2,
      "name": "Maria Lopez",
      "email": "maria.lopez@example.com",
      "turno": "Vespertino",
      "especialidad": "Neurología",
      "cedula": "987654321"
    },
    {
      "id": 3,
      "name": "Carlos Sanchez",
      "email": "carlos.sanchez@example.com",
      "turno": "Nocturno",
      "especialidad": "Pediatría",
      "cedula": "456789123"
    }
  ]
}

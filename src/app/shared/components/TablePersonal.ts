
import { Component, input, InputSignal } from '@angular/core';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';


interface Personal {
  id: number;
  name: string;
  email: string;
  especialidad?: string;
  cedula?: string;
  turno: string;
}

@Component({
  selector: 'table-personal',
  imports: [
    HlmTableImports,
    HlmBadgeImports,
    NgIcon
  ],
  providers: [provideIcons({lucideEllipsis})],
  template:`
    <div hlmTableContainer>
      <table hlmTable>
        <caption hlmTableCaption>
          @if (ROL() === 1) {
            Lista de doctores registrados
          } @else {
            Lista de recepcionistas registrados
          }
        </caption>
        <thead hlmTableHeader>
          <tr hlmTableRow>
            <th hlmTableHead class="w-[40px]">Id</th>
            <th hlmTableHead>Nombre</th>
            <th hlmTableHead>Email</th>
            @if (ROL() === 1) {
              <th hlmTableHead class="text-center">Especialidad</th>
              <th hlmTableHead class="text-center">Cedula</th>
            }
            <th hlmTableHead class="text-center">Turno</th>
            <th hlmTableHead class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody hlmTableBody>
          @for (invoice of DATA(); track invoice.id) {
          <tr hlmTableRow>
            <td hlmTableCell class="font-medium">{{ invoice.id }}</td>
            <td hlmTableCell>{{ invoice.name }}</td>
            <td hlmTableCell>{{ invoice.email }}</td>
            @if (ROL() === 1) {
              <td hlmTableCell class="text-center"><span hlmBadge variant="default">{{ invoice.especialidad }}</span></td>
              <td hlmTableCell class="text-center">{{ invoice.cedula }}</td>
            }
            <td hlmTableCell class="text-center">{{ invoice.turno }}</td>
            <td hlmTableCell class="text-right flex justify-center">
              <button hlmBtn variant="outline" size="sm" class="hover:cursor-pointer">
                <ng-icon name="lucideEllipsis" />
              </button>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class TablePersonal {
  readonly ROL:InputSignal<number> = input.required<number>();
  readonly DATA:InputSignal<Personal[]> = input.required<Personal[]>();
}

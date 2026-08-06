
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  imports: [
  ],
  template:`
    <div class="flex flex-col items-center justify-start m-32 container">
      <h1 class="text-2xl font-semibold">Bienvenido al Panel de Administrador</h1>
      <h2 class="text-lg text-muted-foreground font-normal">Gestiona tu sistema de manera eficiente</h2>
    </div>
  `,
})
export class AppAdminHome {
}

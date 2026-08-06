
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBriefcaseMedical, lucideChevronRight, lucideUsers} from '@ng-icons/lucide';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'app-admin-home',
  imports: [
  ],
  template:`
    <div>
      <h1>Bienvenido al Panel de Administrador</h1>

    </div>
  `,
})
export class AppAdminHome {
}

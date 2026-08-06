import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {lucideBell, lucideMegaphone } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';


@Component({
	selector: 'app-notification-button',
	imports: [HlmDropdownMenuImports, HlmButtonImports, NgIcon, HlmAvatarImports],
	providers: [provideIcons({lucideBell, lucideMegaphone})],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button hlmBtn variant="ghost" [hlmDropdownMenuTrigger]="menu" align="start">
      <ng-icon name="lucideBell" />
    </button>

		<ng-template #menu>
			<hlm-dropdown-menu>
				<hlm-dropdown-menu-group>
          @for (item of notifications; track item.id) {
            <button hlmDropdownMenuItem>
              <div class="flex gap-4 py-2 mx-3 w-full">
                <ng-icon name="lucideMegaphone" />
                <div class="flex flex-col gap-1">
                  <h3 class="text-sm font-semibold leading-none text-left w-full">{{item.title}}</h3>
                  <h5 class="text-xs text-muted-foreground text-left w-full">{{item.description}}</h5>
                </div>
              </div>
            </button>
          } @empty {
            <p>No hay notificaciones pendientes</p>
          }
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class NotificationButton {

  readonly notifications = [
    {
      id: 1,
      title: 'New message',
      description: 'You have a new message',
    },
    {
      id: 2,
      title: 'New message',
      description: 'You have a new message',
    },
    {
      id: 3,
      title: 'New message',
      description: 'You have a new message',
    }

  ]
}

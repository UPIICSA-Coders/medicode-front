import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCreditCard, lucideLogOut, lucideSettings, lucideUser } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';


@Component({
	selector: 'app-profile-button',
	imports: [HlmDropdownMenuImports, HlmButtonImports, NgIcon, HlmAvatarImports],
	providers: [provideIcons({ lucideUser, lucideCreditCard, lucideSettings, lucideLogOut })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button hlmBtn variant="ghost" [hlmDropdownMenuTrigger]="menu" align="start" class="gap-2 h-full cursor-pointer hover:bg-muted">
			<div class="flex flex-col justify-center">
				<h1 class="text-sm text-right font-normal">{{ userName }}</h1>
				<h3 class="text-xs text-muted-foreground text-right font-normal">{{ rol }}</h3>
			</div>
			<hlm-avatar>
				<img hlmAvatarImage src='/assets/avatar.png' alt='spartan logo. Resembling a spartanic shield' />
				<span hlmAvatarFallback>DS</span>
			</hlm-avatar>
		</button>

		<ng-template #menu>
			<hlm-dropdown-menu>
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon name="lucideUser" />
						Profile
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem variant="destructive">
						<ng-icon name="lucideLogOut" />
						Log out
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class ProfileButton {

  readonly userName = "Nombre Usuario"
  readonly rol = "Medico General"

}

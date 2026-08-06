import { Component, signal } from '@angular/core';
import { AppSidebar } from './shared/components/sidebar';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { RouterOutlet } from '@angular/router';
import { ProfileButton } from './shared/components/ProfileButton';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { NotificationButton } from './shared/components/NotificationButton';

@Component({
  selector: 'app-root',
  imports: [AppSidebar, HlmSidebarImports, RouterOutlet, ProfileButton, HlmSeparatorImports, NotificationButton],
  template: `
    <app-sidebar>
      <main hlmSidebarInset>
        <header class="flex h-12 items-center justify-between px-4 border-b">
          <button hlmSidebarTrigger><span class="sr-only"></span></button>
          <div class="flex items-center">
            <app-notification-button></app-notification-button>
            <hlm-separator orientation="vertical" />
            <app-profile-button></app-profile-button>
          </div>
        </header>
        <router-outlet/>
      </main>
    </app-sidebar>
  `
})
export class App {
  protected readonly title = signal('medicode-front');
}

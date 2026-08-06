import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHlmSidebarConfig } from '@spartan-ng/helm/sidebar';

import { routes } from './shared/routes/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHlmSidebarConfig({
        sidebarWidth: '14rem',
        sidebarWidthMobile: '18rem',
        sidebarWidthIcon: '3rem',
        sidebarCookieName: 'sidebar_state',
        sidebarCookieMaxAge: 60 * 60 * 24 * 7,
        sidebarKeyboardShortcut: 'b',
        mobileBreakpoint: '768px',
    }),
    ],
};

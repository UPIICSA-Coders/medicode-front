
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBriefcaseMedical, lucideChevronRight, lucideUsers} from '@ng-icons/lucide';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { HlmSidebarImports, HlmSidebarService } from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [
    HlmSidebarImports,
    HlmCollapsibleImports,
    NgIcon,
    RouterLink,
  ],
  template: `
    <div hlmSidebarWrapper>
      <hlm-sidebar collapsible="icon" variant="floating">
        <div hlmSidebarHeader>
          <div class="flex items-center gap-2 p-2">
            <button [routerLink]="['/home']" (click)="expandIfCollapsed()" class="hover:cursor-pointer">
              <ng-icon name="lucideBriefcaseMedical" class="size-4" />
            </button>
          <div class="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
            <span class="truncate font-semibold">Medicode</span>
            <span class="truncate text-xs text-muted-foreground">Clinical Management System</span>
          </div>
        </div>
      </div>
        <div hlmSidebarContent>
          <div hlmSidebarGroup>
            <div hlmSidebarGroupLabel>Admin</div>
            @for (item of _items; track item.title) {
              <hlm-collapsible [expanded]="item.defaultOpen" class="group/collapsible">
                  <li hlmSidebarMenuItem>
                      <button
                          (click)="expandIfCollapsed()"
                          hlmCollapsibleTrigger
                          hlmSidebarMenuButton
                          class="flex w-full items-center justify-between hover:cursor-pointer"
                      >
                          <ng-icon
                              [name]="item.icon"
                              class="mr-2"
                              hlm
                          />
                          <span>{{ item.title }}</span>
                          <ng-icon
                              name="lucideChevronRight"
                              class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                              hlm
                          />
                      </button>
                      <hlm-collapsible-content>
                          <ul hlmSidebarMenuSub>
                              @for (subItem of item.items; track subItem.title) {
                                  <button hlmSidebarMenuSubButton class="w-full hover:cursor-pointer" [routerLink]="subItem.url" (click)="expandIfCollapsed()">
                                      <span>{{ subItem.title }}</span>
                                  </button>
                              }
                          </ul>
                      </hlm-collapsible-content>
                  </li>
              </hlm-collapsible>
          }
          </div>
          <div hlmSidebarGroup></div>
        </div>
        <div hlmSidebarFooter></div>
      </hlm-sidebar>

      <ng-content />
    </div>
  `,
  providers: [
    provideIcons({
      lucideBriefcaseMedical,
      lucideChevronRight,
      lucideUsers
    }),
  ]
})
export class AppSidebar {
    private readonly _sidebarService = inject(HlmSidebarService)

   protected readonly _items = [
    {
      title: 'Gestion de Personal',
      icon: 'lucideUsers',
      defaultOpen: true,
      items: [
        { title: 'Doctores',
          url: '/manage/doctors',
        },
        { title: 'Recepcionistas',
          url: '/manage/receptionists',
        },
      ],
    }
  ];
  protected expandIfCollapsed(): void{
    if(this._sidebarService.state() === 'collapsed'){
      this._sidebarService.setOpen(true);
    }
  }
}

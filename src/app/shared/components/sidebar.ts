
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBriefcaseMedical, lucideChevronRight, lucideUsers} from '@ng-icons/lucide';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [
    HlmSidebarImports,
    HlmCollapsibleImports,
    NgIcon,
    RouterLink
  ],
  template: `
    <div hlmSidebarWrapper>
      <hlm-sidebar>
        <div hlmSidebarHeader>
          <div class="flex items-center gap-2 p-2">
            <button hlmBtn variant="ghost" class="flex items-center gap-2 p-0 hover:cursor-pointer" [routerLink]="'/home'">
              <ng-icon [name]="'lucideBriefcaseMedical'" class="text-3xl text"/>
              <div class="flex flex-col gap-0">
                <h1 class="text-normal font-semibold m-0 p-0 text-left">Medicode</h1>
                <h3 class="text-xs text-muted-foreground m-0 p-0 text-left">Medical Management System</h3>
              </div>
            </button>
          </div>
        </div>
        <div hlmSidebarContent>
          <div hlmSidebarGroup>
            <div hlmSidebarGroupLabel>Admin</div>
            @for (item of _items; track item.title) {
              <hlm-collapsible [expanded]="item.defaultOpen" class="group/collapsible">
                  <li hlmSidebarMenuItem>
                      <button
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
                                  <button hlmSidebarMenuSubButton class="w-full hover:cursor-pointer" [routerLink]="subItem.url">
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
}

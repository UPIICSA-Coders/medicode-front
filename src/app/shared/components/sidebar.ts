
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBriefcaseMedical, lucideChevronRight, lucideUsers} from '@ng-icons/lucide';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [
    HlmSidebarImports,
    HlmCollapsibleImports,
    NgIcon
  ],
  template: `
    <div hlmSidebarWrapper>
      <hlm-sidebar>
        <div hlmSidebarHeader>
          <div class="flex items-center gap-2 p-2">
            <ng-icon [name]="'lucideBriefcaseMedical'" class="text-3xl"/>
            <div class="flex flex-col gap-0">
              <h1 class="text-normal font-bold m-0 p-0">Medicode</h1>
              <h3 class="text-sm text-muted-foreground m-0 p-0">Medical Management System</h3>
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
                          hlmCollapsibleTrigger
                          hlmSidebarMenuButton
                          class="flex w-full items-center justify-between"
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
                                  <li hlmSidebarMenuSubItem>
                                      <button hlmSidebarMenuSubButton class="w-full">
                                          <span>{{ subItem.title }}</span>
                                      </button>
                                  </li>
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
        { title: 'Doctores' },
        { title: 'Recepcionistas'},
      ],
    }
  ];
}

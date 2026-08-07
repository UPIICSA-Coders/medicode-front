
import { Component, input } from '@angular/core';

@Component({
  selector: 'header-page',
  imports: [
  ],
  template:`
    <div class="flex flex-col items-left justify-start my-8">
      <h1 class="text-xl font-semibold">{{ TITLE() }}</h1>
      <h2 class="text-medium text-muted-foreground font-normal">{{ DESCRIPTION() }}</h2>
    </div>
  `,
})
export class HeaderPage {
  readonly TITLE = input.required<string>();
  readonly DESCRIPTION = input<string>();
}

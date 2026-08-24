import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import { HeaderPage } from '../../shared/components/HeaderPage';

import {
  FormField,
  FormRoot
} from '@angular/forms/signals';

import { ReactiveFormsModule } from '@angular/forms';

import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';

import {
  lucideUser,
  lucideLock,
  lucideMapPin
} from '@ng-icons/lucide';

import {
  NgIconComponent,
  provideIcons
} from '@ng-icons/core';


@Component({
  selector: 'app-receptionist-add',

  imports: [
    HeaderPage,
    FormRoot,
    ReactiveFormsModule,

    HlmButtonImports,
    HlmCardImports,
    HlmFieldImports,
    HlmInputImports,
    HlmInputGroupImports,

    FormField,
    NgIconComponent
  ],

  viewProviders: [
    provideIcons({
      lucideUser,
      lucideLock,
      lucideMapPin
    })
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {
    class: 'w-full'
  },

  template: `


    <div class="container">

      <header-page
        [TITLE]="'Registro de Recepcionistas'"
        [DESCRIPTION]="'Completa el perfil del nuevo personal a agregar'"
      />

    </div>


    <!-- INFORMACIÓN PERSONAL -->

    <div class="container">

  <hlm-card>

  <hlm-card-header>
    <h1 class="flex items-center gap-2">
      <ng-icon name="lucideUser" />
      Información Personal
    </h1>
  </hlm-card-header>

  <div hlmCardContent>

    <form id="form-receptionist-personal">

      <!-- Contenedor de los tres campos -->
      <div class="flex flex-col md:flex-row gap-4">

        <!-- NOMBRE -->
        <hlm-field class="flex-1">

          <label hlmFieldLabel for="name">
            Nombre
          </label>

          <input
            id="name"
            hlmInput
            placeholder="Nombre"
            autocomplete="off"
          />

        </hlm-field>


        <!-- APELLIDO PATERNO -->
        <hlm-field class="flex-1">

          <label hlmFieldLabel for="Ap_Paterno">
            Apellido Paterno
          </label>

          <input
            id="Ap_Paterno"
            hlmInput
            placeholder="Apellido Paterno"
            autocomplete="off"
          />

        </hlm-field>


        <!-- APELLIDO MATERNO -->
        <hlm-field class="flex-1">

          <label hlmFieldLabel for="Ap_Materno">
            Apellido Materno
          </label>

          <input
            id="Ap_Materno"
            hlmInput
            placeholder="Apellido Materno"
            autocomplete="off"
          />

        </hlm-field>

      </div>

    </form>

  </div>

</hlm-card>


      <!-- CONTACTO Y SEGURIDAD -->

      <div class="mt-4">

        <hlm-card>

          <hlm-card-header>
          

            <h1 class="flex items-center gap-2">
              <ng-icon name="lucideLock" />
              Contacto y Seguridad
            </h1>

          </hlm-card-header>


          <div hlmCardContent>

            <form id="form-receptionist-contact">
      <div class="flex flex-col md:flex-row gap-4">

              <hlm-field class="flex-1">
              

                <label hlmFieldLabel for="email">
                  Correo Electrónico
                </label>

                <input
                  id="email"
                  hlmInput
                  type="email"
                  placeholder="Correo Electrónico"
                  autocomplete="off"
                />
                </hlm-field>


                <!-- NÚMERO DE TELÉFONO -->
                <hlm-field class="flex-1">
                <label hlmFieldLabel for="phone">
                  Número de Teléfono
                </label>

                <input
                  id="phone"
                  hlmInput
                  type="tel"
                  placeholder="Número de Teléfono"
                  autocomplete="off"
                />

              </hlm-field>

              <!-- CONTRASEÑA -->
              <hlm-field class="flex-1">
                <label hlmFieldLabel for="password">
                  Contraseña
                </label>

                <input
                  id="password"
                  hlmInput
                  type="password"
                  placeholder="Contraseña"
                  autocomplete="new-password"
                />

                <p class="text-sm text-muted-foreground">
                  Min. 12 caracteres, incluyendo números y caracteres especiales
                </p>

              </hlm-field>

            </div>
        
            </form>

          </div>

        </hlm-card>

      </div>


      <!-- DIRECCIÓN -->

      <div class="mt-4">

        <hlm-card>

          <hlm-card-header>

            <h1 class="flex items-center gap-2">
              <ng-icon name="lucideMapPin" />
              Dirección
            </h1>

          </hlm-card-header>


          <div hlmCardContent>

            <hlm-field>

              <label hlmFieldLabel for="address">
                Dirección completa
              </label>

              <input
                id="address"
                hlmInput
                placeholder="Dirección completa"
                autocomplete="off"
              />

            </hlm-field>

          </div>

        </hlm-card>

      </div>


      <!-- BOTÓN -->

      <div class="flex justify-end mt-4 mb-6">

        <button
          hlmBtn
          type="button"
        >
          Finalizar Registro
        </button>

      </div>

    </div>

  `
})
export class ReceptionistAdd {}
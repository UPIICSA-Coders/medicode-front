import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { HeaderPage } from "../../shared/components/HeaderPage";
import { form, FormField, FormRoot, maxLength, minLength, required } from '@angular/forms/signals';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import {lucideUser, lucideMail, lucideLock, lucidePhone} from '@ng-icons/lucide';
import { NgIcon } from "@ng-icons/core";
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-form-doctor',
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
viewProviders : [provideIcons({lucideUser, lucideLock})],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host : {
    class: 'w-full sm:max-w-'
  },
  template: `
    <div class="container">
      <header-page
      [TITLE]="'Registro de Doctor'"
      [DESCRIPTION]="'Completa el perfil del nuevo personal a agregar'"
    />
    </div>
    <div class="container">
    <hlm-card>
      <hlm-card-header>
        <h1><ng-icon name="lucideUser" /> Información Personal</h1>
      </hlm-card-header>
      <div hlmCardContent>
        <form  id="form-doctor-personal">
          <hlm-field>
              <label hlmFieldLabel for="title">Nombre</label>
              <input
              id="name"
              hlmInput
              placeholder="Nombre"
              autoComplete="off"
              />
              <label hlmFieldLabel for="title">Apellido Paterno</label>
              <input
              id="Ap_Paterno"
              hlmInput
              placeholder="Apellido Paterno"
              autoComplete="off"
              />
              <label hlmFieldLabel for="title">Apellido Materno</label>
              <input
              id="Ap_Materno"
              hlmInput
              placeholder="Apellido Materno"
              autoComplete="off"
              />
          </hlm-field>
        </form>
      </div>
    </hlm-card>
    <div class="mt-4">
      <hlm-card>
        <hlm-card-header>
          <h1><ng-icon name="lucideLock" /> Contacto y Seguridad</h1>
        </hlm-card-header>
        <div hlmCardContent>
          <form  id="form-doctor-contact">
            <hlm-field>
                <label hlmFieldLabel for="title">Correo Electrónico</label>
                <input
                id="email"
                hlmInput
                placeholder="Correo Electrónico"
                autoComplete="off"
                />
            </hlm-field>
          </form>
        </div>
      </hlm-card>
    </div>



  `
})
export class FormDoctorComponent {}




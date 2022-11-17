import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearDirectorTecnicoComponent } from './directores-tecnicos/crear-director-tecnico/crear-director-tecnico.component';
import { EditarDirectorTecnicoComponent } from './directores-tecnicos/editar-director-tecnico/editar-director-tecnico.component';
import { BuscarDirectorTecnicoComponent } from './directores-tecnicos/buscar-director-tecnico/buscar-director-tecnico.component';
import { EditarArbitroComponent } from './arbitros/editar-arbitro/editar-arbitro.component';
import { BuscarArbitroComponent } from './arbitros/buscar-arbitro/buscar-arbitro.component';
import { CrearArbitroComponent } from './arbitros/crear-arbitro/crear-arbitro.component';
import { CrearJugadorComponent } from './jugadores/crear-jugador/crear-jugador.component';
import { EditarJugadorComponent } from './jugadores/editar-jugador/editar-jugador.component';
import { BuscarJugadorComponent } from './jugadores/buscar-jugador/buscar-jugador.component';



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearDirectorTecnicoComponent,
    EditarDirectorTecnicoComponent,
    BuscarDirectorTecnicoComponent,
    EditarArbitroComponent,
    BuscarArbitroComponent,
    CrearArbitroComponent,
    CrearJugadorComponent,
    EditarJugadorComponent,
    BuscarJugadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministracionModule { }

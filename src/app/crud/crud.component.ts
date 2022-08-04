import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  mostrarAct: boolean = false;
  usuarios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // obtenerUsuarios(){
  //   this.usuarioService.getUsuarios()
  //   .then((res: any) => {
  //     this.usuarios = res.cont.usuarios;

  //   })
  //   .catch((err: any) => {
  //     this.usuarios = [];
  //   })
  // }

  // restablecerRegistro(){
  //   this.mostrarAct = false;
  //   this.obtenerUsuarios();
  // }

}

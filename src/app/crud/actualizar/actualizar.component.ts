import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { empresaService } from '../../services/empresa.service';
import Swal from 'sweetalert2';
import { empresaModel } from 'src/app/Models/Empresa.model';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  empresa: empresaModel = new empresaModel();

  @Input() idCompany: string = "";

  @Output() emitterActualizacion: EventEmitter<any> = new EventEmitter();

  constructor(private readonly empresaService: empresaService) { }

  ngOnInit(): void {

    this.empresaService.getCompany(this.idCompany)
    .then((res: any) => {
      this.empresa = res.cont.empresa;
    })
    .catch((err: any) => {});

  }

  actualizarEmpresa(forma: NgForm){
    this.empresaService.putCompany(this.empresa, this.idCompany)
    .then((res: any) => {
      Swal.fire({
        icon: "success",
        text: "Se actualizó los datos correctamente"
      });
      forma.reset();

      // Trigger para accionar reloadTable() de crud.component.ts
      this.emitterActualizacion.emit();
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        text: "Error al actualizar datos"
      });
    });
  }

  limpiarForma(forma: NgForm){ 
    forma.reset(); 
  }

}
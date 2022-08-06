import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { empresaModel } from 'src/app/Models/Empresa.model';
import { empresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  empresa: empresaModel = new empresaModel();

  @Output() emitterRegistro: EventEmitter<any> = new EventEmitter();

  constructor(private readonly companyService: empresaService) { }

  ngOnInit(): void {

  }

  registrarEmpresa(forma: NgForm){
    this.companyService.postCompany(this.empresa)
    .then((res: any) => {
      Swal.fire({
        icon:'success',
        text: "Se registró la Empresa Exitosamente"
      });
      forma.reset();
      // emitir trigger para activar obtenerEmpresas()
      this.emitterRegistro.emit();
    })
    .catch((err: any) => {
      Swal.fire({
        icon:'error',
        text: "Error al Registrar Empresa"
      });
    });

    console.log(this.empresa);
    
  }

  limpiarForma(forma: NgForm){
    forma.reset();
  }
}
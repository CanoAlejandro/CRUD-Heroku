import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { empresaModel } from '../Models/Empresa.model';
import { empresaService } from '../services/empresa.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  mostrarAct: boolean = false;

  empresas: empresaModel [] = [];

  idEmpresa: string = "";

  termino: string = "";
  
  constructor(private readonly empresaService: empresaService) { }
  
  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  obtenerEmpresas(){
    this.empresaService.getCompanies()
    .then((res: any) => {
      //cont y empresas son propiedades de la API
      this.empresas = res.cont.empresas;
      console.log(this.empresas);
      
    })
    .catch((err: any) => {
      this.empresas = [];
    });
  }

  update(idEmpresa: any){
    this.idEmpresa = idEmpresa;
    this.mostrarAct = true;
  }

  reloadTable(){
    // se ocultará el componente de Actualzar
    this.mostrarAct = false;
    // recargar la tabla de datos
    this.obtenerEmpresas();
  }

  delete(empresa: empresaModel){
    Swal.fire({
      icon: "question",
      text: `Estas seguro de que deseas eliminar a ${empresa.strNombre}?`,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    })
    .then((res) => {
      if (res.isConfirmed) {
        this.empresaService.delCompany(empresa._id)
        .then((res: any) => {
          Swal.fire({
            icon: "info",
            text: "Se eliminó correctamente"
          });
          this.obtenerEmpresas();
        }).catch((err) => {
          
        });
      }
    })
    .catch((err: any) => {
      Swal.fire({
        icon: "error",
        text: "Error al eliminar"
      });
    });
  }

  showUpdate(idCompany: any){
    this.idEmpresa = idCompany;
    //this.mostrarAct = !this.mostrarAct;
    this.mostrarAct = true;
  }


  searchResults(event: any){
    
    if (event.target.value.length >= 0) {
      this.empresaService.getCompanyByFilter(this.termino)
    .then((result: any) => {
      this.empresas = result.cont.empresas;
      
    }).catch((err) => {
      this.empresas = [];
    });
    }
  }
  
  showLogo(urlLogo: string){
    Swal.fire({
      imageUrl: urlLogo,
      imageAlt: 'Custom image',
    })
  }
  
}
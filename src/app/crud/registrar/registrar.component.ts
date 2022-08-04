import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { empresaModel } from 'src/app/Models/Empresa.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario: empresaModel = new empresaModel();

  @Output() onRegistro: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  registrarUsuario(forma: NgForm){

  }

  limpiarForma(forma: NgForm){
    forma.reset();
  }
}

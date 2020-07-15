import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formularioContacto: FormGroup;

  constructor( private formB: FormBuilder ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formularioContacto = this.formB.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      opciones: ['', [Validators.required]],
      terminos: ['',[Validators.required]]
    });
  }

  enviar(){
    console.log("Click en el botón");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejempipes',
  templateUrl: './ejempipes.component.html',
  styleUrls: ['./ejempipes.component.css']
})
export class EjempipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public txtEjemplo: string = "Hola mundo";
  public numero: number = 12345;
  public user: any = { "nombre": "Jason", "ciudad": "México" };

  public miPromesa = new Promise<string>( (resolve) => {
    setTimeout(()=>{
      resolve("Datos esperados")
    }, 4500);
  } );

  public fecha = new Date();
  public name = 'jAsoN liMoN';

  public urlVideo = 'https://www.youtube.com/embed/UJqFgg-CmBo';

  public activo:boolean = false;
}

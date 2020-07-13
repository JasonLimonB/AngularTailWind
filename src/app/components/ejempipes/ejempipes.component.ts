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
}

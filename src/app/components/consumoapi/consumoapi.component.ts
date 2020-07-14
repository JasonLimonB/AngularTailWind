import { Component, OnInit } from '@angular/core';
import { RickAndMortySService } from '../../services/consumo/rick-and-morty-s.service';

@Component({
  selector: 'app-consumoapi',
  templateUrl: './consumoapi.component.html',
  styleUrls: ['./consumoapi.component.css']
})
export class ConsumoapiComponent implements OnInit {

  constructor(private _servicioApi: RickAndMortySService) { }

  personajes:string[] = [];

  ngOnInit(): void {

    this._servicioApi.getPersonajes().subscribe(( data:any )=>{
      this.personajes = data.results;
    });
  }

}

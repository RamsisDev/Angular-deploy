import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';



@Injectable({providedIn: 'root'})

export class dbzService {
  constructor() { }

  public personajes: Personaje[]  = [
    {id: uuid(), name: 'Goku',poder: 15000},
    {id: uuid(),name: 'Vegeta',poder: 13000},
    {id: uuid(),name: 'Napa',poder: 10000},
    {id: uuid(),name: 'Krilin',poder: 7000}
  ];


  onNewCharacter(personaje:Personaje):void{

    personaje.id = uuid();


    this.personajes.push(personaje);

  }

  // onDeletePersonaje(indice: number):void{
  //   this.personajes.splice(indice, 1)
  // }
  borrarPersonaPorId(id:string):void {
    this.personajes= this.personajes.filter(personaje => personaje.id !== id);


  }


}

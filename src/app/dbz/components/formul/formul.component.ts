import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-formul-dbz',
  templateUrl: './formul.components.html',
  styleUrls: ['./formul.components.css']

})
export class FormulDBZComponent{

  @Output()
  public onNewCharacter: EventEmitter<Personaje> = new EventEmitter();


  public character: Personaje = {
    id:  uuid(),
    name: '',
    poder: 0
  }

  sendCharacter():void{

    if(this.character.name.length === 0) return;

    //debugger;

    this.onNewCharacter.emit({...this.character});


    this.character.name = "";
    this.character.poder= 0;
  }


}

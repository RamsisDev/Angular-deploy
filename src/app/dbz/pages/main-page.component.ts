import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { dbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-DBZ-main-page',
  templateUrl: 'main-page.component.html',

})

export class dbzComponent  {



  constructor(private dbzServicio: dbzService) {

  }


  get personajes(): Personaje[] {
    return [...this.dbzServicio.personajes];
  }

  borrarPersonaje(id: string):void {

    this.dbzServicio.borrarPersonaPorId(id);
  }

  nuevoPersonaje(personje : Personaje){
    this.dbzServicio.onNewCharacter(personje);
  }

}

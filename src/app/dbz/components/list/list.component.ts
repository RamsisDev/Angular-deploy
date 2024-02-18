import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListDBZComponent{

  @Input()
  public listaPersonajes: Personaje[] =[]


  @Output()
  public personjeBorrado: EventEmitter<string> = new EventEmitter();

  onDeleteChar(id: string ):void {
    this.personjeBorrado.emit(id)
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { dbzComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list.component';
import { FormulDBZComponent } from './components/formul/formul.component';





@NgModule({
  declarations: [
    dbzComponent,
    ListDBZComponent,
    FormulDBZComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    dbzComponent,

  ]
})
export class DbzModule { }

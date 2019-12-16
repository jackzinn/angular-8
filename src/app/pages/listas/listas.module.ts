import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListasRoutingModule } from "./listas-routing.module";
import { FormsModule } from "@angular/forms";
import { ListasComponent } from "./listas.component";
import { NewComponent } from "./new/new.component";

@NgModule({
  declarations: [ListasComponent, NewComponent],
  imports: [CommonModule, ListasRoutingModule, FormsModule]
})
export class ListasModule {}

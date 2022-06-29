import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteMenuComponent } from './componentes/componente-menu/componente-menu.component';
import { ComponenteToolbarComponent } from './componentes/componente-toolbar/componente-toolbar.component';
import { ComponenteContentComponent } from './componentes/componente-content/componente-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteMenuComponent,
    ComponenteToolbarComponent,
    ComponenteContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

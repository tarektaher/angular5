import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarvelHerosComponent } from './marvel-heros/marvel-heros.component';
import { DcComicsComponent } from './dc-comics/dc-comics.component';


const routes: Routes = [
    { path: '', component: DcComicsComponent },
    { path: 'marvels', component: MarvelHerosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MarvelHerosComponent,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

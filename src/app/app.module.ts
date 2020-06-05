import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { InteractionComponent } from './interaction/interaction.component';
import { AttractorComponent } from './attractor/attractor.component';

@NgModule({
  declarations: [MainComponent, InteractionComponent, AttractorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}

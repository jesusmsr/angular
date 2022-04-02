import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { FadeOnScrollDirective } from './directives/fade-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParallaxDirective,
    FadeOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

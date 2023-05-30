import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { QuizzResultsComponent } from './components/quizz-results/quizz-results.component';
import { QuizzButtonComponent } from './components/quizz-button/quizz-button.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    TitleComponent,
    QuizzResultsComponent,
    QuizzButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

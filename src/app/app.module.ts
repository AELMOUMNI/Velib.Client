import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

import { DocksModule } from './docks/docks.module';

@NgModule({
  declarations: [	
    AppComponent,
    WelcomeComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'}
    ]),
    DocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

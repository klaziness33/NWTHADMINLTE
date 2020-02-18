import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppsettingComponent } from './component/appsetting/appsetting.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

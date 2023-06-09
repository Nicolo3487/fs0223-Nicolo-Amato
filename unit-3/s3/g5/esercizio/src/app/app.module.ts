import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/dashboard/favorite.component';
import { ErrorsInterceptor } from './pages/dashboard/errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FavoritesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorsInterceptor,
    multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

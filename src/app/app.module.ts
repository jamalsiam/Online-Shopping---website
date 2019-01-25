import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CardViewerComponent } from './common/UIcomponent/card/card-viewer/card-viewer.component';
import { CardComponent } from './common/UIcomponent/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideBarComponent } from './layout/aside-bar/aside-bar.component';
import { SlideshowComponent } from './common/UIcomponent/slideshow/slideshow.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FeatureBoxComponent } from './common/UIcomponent/feature-box/feature-box.component';
import { SearchAreaComponent } from './common/UIcomponent/search-area/search-area.component';
import { ItemCardComponent } from './common/UIcomponent/item-card/item-card.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SignupService } from "./component/signup/service/signup.service";
import { CookieService } from './framework/cookie/cookie.service';
import * as NgxCookie from 'ngx-cookie-service';
import { LogoutComponent } from './component/logout/logout.component';
import { UnauthorizedCanActivate, } from './framework/canActivate/unauthorized.canActivate';
import { AuthorizedCanActivate } from './framework/canActivate/authorized.canActivate';
import { LoginService } from './component/login/service/login.service';
import { AppInitializerService } from './framework/appInitializer/appInitializer.service';
import { RequestInterceptor } from './framework/interceptor/request.interceptor';
import { AccountStore } from './framework/dataStore/account/account.store';
import { AddItemComponent } from './component/add-item/add-item.component';
import { ItemService } from './common/services/item.service';
import { MaterialModule } from './material';
import { ToastrModule } from 'ngx-toastr';
import { MomentModule } from 'angular2-moment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideBarComponent,
    SlideshowComponent,
    HomeComponent,
    FooterComponent,
    FeatureBoxComponent,
    SearchAreaComponent,
    ItemCardComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    CardViewerComponent,
    CardComponent,
    LogoutComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
    MomentModule

  ],
  providers: [
    SignupService,
    CookieService,
    NgxCookie.CookieService,
    UnauthorizedCanActivate,
    AuthorizedCanActivate,
    LoginService,
    AccountStore,
    ItemService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitializerService],
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function init_app(firstLoadService: AppInitializerService) {
  return () => firstLoadService.initializeApp();
}
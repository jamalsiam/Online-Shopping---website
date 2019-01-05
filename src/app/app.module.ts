import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideBarComponent } from './layout/aside-bar/aside-bar.component';
import { SlideshowComponent } from './common/slideshow/slideshow.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FeatureBoxComponent } from './common/feature-box/feature-box.component';
import { SearchAreaComponent } from './common/search-area/search-area.component';
import { ItemCardComponent } from './common/item-card/item-card.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlideshowModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

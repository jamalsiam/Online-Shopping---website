import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { BaseService } from './framework/service/base.service';

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
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

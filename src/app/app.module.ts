import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SwiperModule } from 'swiper/angular';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { SettingsComponent } from './admin/pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutUsComponent,
    ContactComponent,
    TestimonialComponent,
    DashboardComponent,
    SettingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

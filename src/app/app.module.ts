import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';

import { ProductApiService } from './product-api.service';
import { MochParentComponent } from './moch-parent/moch-parent.component';
import { MilkChildComponent } from './milk-child/milk-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent,
    HomePageComponent,
    BootstrapDemoComponent,
    MochParentComponent,
    MilkChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ProductApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

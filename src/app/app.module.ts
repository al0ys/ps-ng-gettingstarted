import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product/product-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { StarComponent } from './shared/star.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

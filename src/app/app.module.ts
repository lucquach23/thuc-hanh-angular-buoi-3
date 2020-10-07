import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from './share/share.module';
import { ExporttComponent } from './exportt/exportt.component';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ProductService } from './exportt/productservice';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ExporttComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
  ],
  providers: [ProductService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

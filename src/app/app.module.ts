import { AppRoutingModule } from './app-routing.modules';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { CategoryComponent } from './category/category.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewDeviceComponent } from './new-device/new-device.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    CategoryComponent,
    NewCategoryComponent,
    NewDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

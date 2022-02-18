import { NewDeviceComponent } from './new-device/new-device.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoryComponent } from './category/category.component';
import { DeviceComponent } from './device/device.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full' },
  { path: 'devices', component: DeviceComponent },
  { path: 'new-device', component: NewDeviceComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'new-category', component: NewCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

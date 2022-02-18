import { DeviceService } from './../services/device.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../models/category.model';
import { Device } from '../models/device.model';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {
  @Output() onRegisterDevice = new EventEmitter<Device>();

  id : number =  0;
  category: number = 0;
  color: String = "";
  partNumber: number = 0;

  categories: Category[] = [];


  constructor(private service: CategoryService, private serviceDevice: DeviceService, private router: Router) { }


  registerDevice(){
    console.log('Dispositivo enviado');
    const deviceValue: Device = {
      id: this.id,
      category: this.category,
      color: this.color,
      partNumber: this.partNumber
    };

    this.serviceDevice.addDevice(deviceValue).subscribe(
      (result) =>{
        console.log(result);
        // Retorna para a lista de devices
        this.router.navigateByUrl('devices');
      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {
    this.service.listCategories().subscribe((categories: Category[]) =>{
      this.categories = categories;
    })
  }

}

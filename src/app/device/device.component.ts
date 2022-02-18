import { DeviceService } from './../services/device.service';
import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  devices: Device[] = [];

  constructor(private service: DeviceService, private router: Router) { }

  removeDevice(id: number){
    console.log('Device removido');

    this.service.removeDevice(id).subscribe(
      (result) =>{

       // Retorna para a lista de categorias
       this.router.navigateByUrl('devices');
       // Refresh no componente
       this.ngOnInit();

      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {
    this.service.listDevices().subscribe((devices: Device[]) => {
      this.devices = devices;
    })
  }

}

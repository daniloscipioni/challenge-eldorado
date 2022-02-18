import { DeviceService } from './../services/device.service';
import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  devices: Device[] = [];

  constructor(private service: DeviceService) { }

  ngOnInit(): void {
    this.service.listDevices().subscribe((devices: Device[]) => {
      this.devices = devices;
    })
  }

}

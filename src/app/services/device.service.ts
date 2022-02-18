import { Category } from './../models/category.model';
import { Observable } from 'rxjs';
import { Device } from './../models/device.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private listDevice: Device[] = [];
  private url = 'http://localhost:3000/devices';

  constructor(private httpClient: HttpClient) {
    this.listDevice = [];
  }

  listDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.url);
  }

  addDevice(device: Device): Observable<Device> {
    return this.httpClient.post<Device>(this.url, device);
  }

  removeDevice(id: number): Observable<Device>{
    return this.httpClient.delete<Device>(this.url + "/" + id);
  }
}

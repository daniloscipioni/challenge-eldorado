import { Category } from './../models/category.model';
import { map, Observable } from 'rxjs';
import { Device } from './../models/device.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private listDevice: Device[] = [];
  private url = 'https://challenge-eldorado-backend.herokuapp.com/api';

  constructor(private httpClient: HttpClient) {
    this.listDevice = [];
  }

  listDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(`${this.url}/devices`)
    .pipe(map((result:Category|any) => result.data));
  }

  addDevice(device: Device): Observable<Device> {
    return this.httpClient.post<Device>(`${this.url}/add-device`, device);
  }

  removeDevice(id: number): Observable<Device>{
    return this.httpClient.delete<Device>(`${this.url}/remove-device` + "/" + id);
  }
}

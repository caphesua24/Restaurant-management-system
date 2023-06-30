import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = environment.apiUrl; // 28/06/2023 - Dashboard Page

  constructor(private httpClient: HttpClient) {}

  // 28/06/2023 - Dashboard Page
  getDetails() {
    return this.httpClient.get(this.url + '/dashboard/details');
  }
}

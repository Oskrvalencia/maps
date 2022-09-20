import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphhopperRoutesService {

  constructor(private httpClient: HttpClient) {
  }

  public getRouteById(id: any): Promise<any[]> {
    const url = `${environment.backend.graphhoperRoutes}${id}`;
    return this.httpClient.get<any[]>(url).toPromise();
  }

}
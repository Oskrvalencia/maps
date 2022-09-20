import { Component, OnInit } from '@angular/core';
import { Draggable, geoJSON, Icon, icon, Map, marker } from 'leaflet';
import { tileLayerSelect } from '../config/tile_layers/functions';
import { GraphhopperRoutesService } from '../services/routes.services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnInit {
  public data: any = [];
  constructor(public graphhopperRoutesService: GraphhopperRoutesService) {}

  async ngOnInit() {}

  async ngAfterViewInit() {
    this.data = await this.graphhopperRoutesService.getRouteById(
      '6328d89d27cbff34d5069201'
    );
    const map = new Map('map').setView([4.627631, -74.106881], 6);
    tileLayerSelect().addTo(map);

    /* for (const iterator of this.data[0].paths[0].points.coordinates) {
      marker([iterator[1], iterator[0]]).addTo(map);
    } */

    this.data[0].points.coordinates.map((point: any) => {
      marker([point[1], point[0]]).addTo(map);
    }); /* pintar todos los puntos de un array */

    map.fitBounds([
      ...this.data[0].points.coordinates.map((point: any) => [
        point[1],
        point[0],
      ]),
    ]); /* para centrar en donde esten todos los marcadores */

    /* for (const iterator of this.data[0].paths[0].snapped_waypoints
      .coordinates) {
      marker([iterator[1], iterator[0]]).addTo(map);
    } */ /* añadir origen y destino  */

    let customIcon = new Icon({
      iconUrl: 'bell',
      iconSize: [50, 50],
      iconAnchor: [25, 50]
    }); /* Definir icono */

    marker([4.627631, -74.106881], { 
      draggable: true, /* Que se deje arrastrar */
      icon: customIcon  
    }).addTo(map);
  }
}

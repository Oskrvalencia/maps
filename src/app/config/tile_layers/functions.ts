import { tileLayer } from 'leaflet';
import { tileLayers } from './data';
import { ITilerLayerOptions } from './option.interface';

/* ***
Regresar un mapa por defecto
*/
export const tileLayerSelect = (
  layer: string = tileLayers.baseLayers.default.map,
  options: ITilerLayerOptions = {
    minZoom: 6,
    maxZoom: 18,
    atribution: tileLayers.baseLayers.default.atribution,
  }
) => {
  return tileLayer(layer, options);
};

/* 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
 

por defecto esta es la configuracion para uno solo, la L se puede quitar cuando se importa tilelayer desde leaflet
import { tileLayer } from 'leaflet';

*/
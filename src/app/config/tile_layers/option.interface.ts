export interface ITilerLayerOptions {
  minZoom?: number;
  maxZoom?: number;
  subdomains?: string | string[];
  errorTileUrl?: string;
  zoomOffSet?: number;
  tms?: boolean;
  zoomReverse?: boolean;
  detectRetina?: boolean;
  crossOrigin?: boolean | string;
  atribution?: string;
}

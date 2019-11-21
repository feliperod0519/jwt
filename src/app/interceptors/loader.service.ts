import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public enabled = false;
  public i = 0;

  constructor() { }

  DoShow(){ this.enabled = true; }

  DoHide(){ this.enabled = false; }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  styleUrls: ['./artist-items.component.css'],
  inputs: ['artist']
})
export class ArtistItemsComponent implements OnInit {

  artist: any;
  constructor() { }

  ngOnInit(): void {
  }

}

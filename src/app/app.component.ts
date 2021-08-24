import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({

  // This identifies a custom HTML tag whee the compondent will be installed
  // you will see this in the index.html file.
  selector: 'app-root',

  // These external files only affect this component
  templateUrl: './app.component.html',

  // The styles in this file will only affect the code in the templateUrl
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public query: string;
  public artists: any[];
  public currentArtist: any;

  constructor(private http: HttpClient) {
    this.query= '';
  };

  ngOnInit():void{
    this.http.get<any>('../assets/data.json').subscribe(
      data => {
        this.artists = data;
      }
    )
  }

  public showArtists(item): any {
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }

}

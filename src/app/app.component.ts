import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos: Photo[] = [];

  //Constructor ficará responsavel somente por injeções 
  constructor(private photoService: PhotoService) { }

  //Fluxo de vída do componente
  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        //console.log(photos[0].description);
        this.photos = photos
      });

  }
}
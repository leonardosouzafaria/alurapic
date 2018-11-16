import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  filter: string = '';

  //Constructor ficará responsavel somente por injeções 
  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) { }

  //Fluxo de vída do componente
  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => {
        //console.log(photos[0].description);
        this.photos = photos
      });

  }
}

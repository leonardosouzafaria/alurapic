import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({

    //Private
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent 
    ],

    //Public
    exports: [  ],

    //Dependencias
    imports: [ 
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule { }
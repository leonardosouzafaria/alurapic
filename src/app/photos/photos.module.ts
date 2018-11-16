import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
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
    imports: [ HttpClientModule ]
})

export class PhotosModule { }
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({

    //Private
    declarations: [ PhotoComponent ],

    //Public
    exports: [ PhotoComponent ],

    //Dependencias
    imports: [ HttpClientModule ]
})

export class PhotosModule { }
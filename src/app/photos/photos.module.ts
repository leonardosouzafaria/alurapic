import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    
    //Private
    declarations: [PhotoComponent],

    //Public
    exports: [PhotoComponent]
})

export class PhotosModule { }
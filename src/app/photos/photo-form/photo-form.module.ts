import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoFormModule { }

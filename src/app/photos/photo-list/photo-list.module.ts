import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        LoadButtonComponent,
        PhotosComponent,
        PhotoListComponent,
        FilterByDescription,
        SearchComponent
    ],

    imports: [
        CommonModule,
        PhotoModule,
        CardModule
    ]
})
export class PhotoListModule { }
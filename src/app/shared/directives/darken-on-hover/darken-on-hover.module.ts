import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ DarkenOnHoverDirective ],
    imports: [ CommonModule ],
    exports: [ DarkenOnHoverDirective ]
})
export class DarkenOnHoverModule { }
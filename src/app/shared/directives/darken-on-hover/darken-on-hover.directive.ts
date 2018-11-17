import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[darkenOnHover]'
})

export class DarkenOnHoverDirective { 

    constructor(private el: ElementRef, private render: Renderer){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }

}
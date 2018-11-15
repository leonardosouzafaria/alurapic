import { Component, Input } from "@angular/core";

@Component({
    
    // Tag HTML
    selector : 'ap-photo',
    
    //Template html
    templateUrl : 'photo.component.html'

})

export class PhotoComponent {

    @Input() description = '';

    @Input() url = '';

}
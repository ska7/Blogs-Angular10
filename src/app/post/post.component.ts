import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.less'],
})
export class PostComponent {
    @Input() description: string;
    @Input() title: string;
    @Input() imageSrc: string;
    @Input() id: Symbol;
}

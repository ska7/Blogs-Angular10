import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/interfaces';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './active-modal.html',
})
class NgbdModalContent {
    @Input() selectedPost: Post;
    constructor(public activeModal: NgbActiveModal) {}

    handleDeletePost(postId) {
        this.activeModal.close('Close click');
        console.log(postId);
    }
}

@Component({
    selector: 'delete-post-modal',
    templateUrl: './delete-post-modal.component.html',
    styleUrls: ['./delete-post-modal.component.less'],
})
export class DeletePostModalComponent {
    @Input() post: Post;
    constructor(private modalService: NgbModal) {}

    openModal() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.selectedPost = this.post;
    }
}

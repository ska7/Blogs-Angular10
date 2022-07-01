import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    template: `
        <div class="modal-header">
            <button
                type="button"
                class="btn-close"
                aria-label="Close"
                (click)="activeModal.dismiss('Cross click')"
            ></button>
        </div>
        <div class="modal-body">
            <p>Hello!</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">
                Close
            </button>
        </div>
    `,
})
class NgbdModalContent {
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'delete-post-modal',
    templateUrl: './delete-post-modal.component.html',
    styleUrls: ['./delete-post-modal.component.less'],
})
export class DeletePostModalComponent {
    constructor(private modalService: NgbModal) {}

    openModal() {
        this.modalService.open(NgbdModalContent);
    }
}

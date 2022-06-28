import { Injectable, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import cloudinaryConfig from '../utils/cloudinaryConfig';
import { Observable, Subject } from 'rxjs';

const CLOUDINARY_SCRIPT_URL = 'https://upload-widget.cloudinary.com/global/all.js';
declare let cloudinary: any;
@Injectable({
    providedIn: 'root',
})
export class CloudinaryUploaderService {
    uploadedPicUrlEmitter = new Subject<string>();
    renderer: Renderer2;
    public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
        const script = renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        renderer.appendChild(this.document.body, script);
        return script;
    }

    constructor(@Inject(DOCUMENT) private document: Document) {}

    raiseUploadedPicEvent({ url = '', error = '' }) {
        url && this.uploadedPicUrlEmitter.next(url);
        error && this.uploadedPicUrlEmitter.error(error);
    }

    onUpload = (error, result) => {
        const { event, info } = result;
        const isUploadSuccess = event === 'success';
        if (error) {
            this.raiseUploadedPicEvent({ error });
        }

        if (isUploadSuccess) {
            const { url } = info || {};
            this.raiseUploadedPicEvent({ url });
        }
    };

    initializeCloudinaryUploader() {
        return new Observable((observer) => {
            const cloudinaryScriptElement = this.loadJsScript(this.renderer, CLOUDINARY_SCRIPT_URL);
            // Load script
            cloudinaryScriptElement.onload = () => {
                // Create widget instance
                const cloudinaryUploader = cloudinary.createUploadWidget(
                    cloudinaryConfig,
                    // handleUpload,
                    this.onUpload,
                );

                observer.next(cloudinaryUploader);
            };

            cloudinaryScriptElement.onerror = () => {
                observer.error("Something's wrong man, I dunno");
                console.log("Something's wrong man, I dunno");
            };
        });
    }
}

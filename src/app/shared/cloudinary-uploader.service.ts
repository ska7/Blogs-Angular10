import { Injectable, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import cloudinaryConfig from '../utils/cloudinaryConfig';
import { Observable } from 'rxjs';

const CLOUDINARY_SCRIPT_URL =
    'https://upload-widget.cloudinary.com/global/all.js';
declare let cloudinary: any;
@Injectable({
    providedIn: 'root',
})
export class CloudinaryUploaderService {
    renderer: Renderer2;
    public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
        const script = renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        renderer.appendChild(this.document.body, script);
        return script;
    }

    constructor(@Inject(DOCUMENT) private document: Document) {}

    initializeCloudinaryUploader(handleUpload) {
        return new Observable((observer) => {
            const cloudinaryScriptElement = this.loadJsScript(
                this.renderer,
                CLOUDINARY_SCRIPT_URL,
            );
            // Load script
            cloudinaryScriptElement.onload = () => {
                // Create widget instance
                const cloudinaryUploader = cloudinary.createUploadWidget(
                    cloudinaryConfig,
                    handleUpload,
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

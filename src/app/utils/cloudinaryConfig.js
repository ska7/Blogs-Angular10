const CLOUD_NAME = "dcqz28rlu";
const UPLOAD_PRESET = "ml_default";

const cloudinaryConfig = {
    cloudName: CLOUD_NAME,
    uploadPreset: UPLOAD_PRESET,
    cropping: true,
    sources: [ "local", "url"],
    clientAllowedFormats: ["images"],
    maxImageFileSize: 2000000,
    maxImageWidth: 2000,
}

export default cloudinaryConfig;
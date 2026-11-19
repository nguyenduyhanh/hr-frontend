import axios from 'axios';

// Default fallback values if environment variables are not injected during build
const DEFAULT_CLOUD_NAME = 'djtqud6z0';
const DEFAULT_UPLOAD_PRESET = 'hrm_graduation_project';

export const uploadImage = async (file) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || DEFAULT_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || DEFAULT_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        throw new Error('Chưa cấu hình Cloudinary Cloud Name hoặc Upload Preset trong .env');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
    );

    return response.data.secure_url;
};

export const uploadFile = async (file) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || DEFAULT_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || DEFAULT_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        throw new Error('Chưa cấu hình Cloudinary Cloud Name hoặc Upload Preset trong .env');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        formData
    );

    return response.data.secure_url;
};


import {createPhotos, PHOTO_DESCRIPTION_COUNT} from './create-photos.js';

import { renderGallery } from './render-gallery.js';
renderGallery(createPhotos(PHOTO_DESCRIPTION_COUNT));

import './img-upload-form.js';
//import './form-validation.js';

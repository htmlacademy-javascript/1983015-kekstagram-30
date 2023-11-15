import { renderGallery } from './render-gallery.js';
import './img-upload-form.js';
import { getPicture } from './api.js';
import { showDataError } from './util.js';

//const PHOTO_DESCRIPTION_COUN = 25;

getPicture()
  .then((pictures) => {
    renderGallery(pictures);//.slice(0, PHOTO_DESCRIPTION_COUN));
  })
  .catch(
    (err) => {
      showDataError(err.message);
    }
  );

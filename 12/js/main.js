import { renderGallery } from './render-gallery.js';
import './img-upload-form.js';
import { getPicture } from './api.js';
import { showDataError } from './util.js';
import { onFormSubmit, closeEditingForm } from './img-upload-form.js';

getPicture()
  .then((pictures) => {
    renderGallery(pictures);
  })
  .catch(
    (err) => {
      showDataError(err.message);
    }
  );

onFormSubmit(closeEditingForm);

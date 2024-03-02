import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
let lightbox;

import getImages from './js/pixabay-api';
import createGallery from './js/render-functions';

function updateGallery(query) {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  form.insertAdjacentElement('afterend', loader);
  gallery.innerHTML = '';
  getImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          color: 'yellow',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        gallery.innerHTML = createGallery(data.hits);
        if (!lightbox) {
          lightbox = new SimpleLightbox('.gallery-link', {
            captionsData: 'alt',
            captionDelay: 250,
          });
        } else {
          lightbox.refresh();
        }
      }
    })
    .catch(error => {
      gallery.innerHTML = `<p>Gallery creation failed: ${error}</p>`;
    })
    .finally(() => {
      loader.remove();
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.search.value.trim();
  updateGallery(query);
});

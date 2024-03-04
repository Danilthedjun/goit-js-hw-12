import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const addMoreButton = document.querySelector('.add-more');
const spinner = document.querySelector('.spiner');
let totalHits;
let lightbox;

import getImages from './js/pixabay-api';
import createGallery from './js/render-functions';

function updateGallery(query, page) {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  form.insertAdjacentElement('afterend', loader);
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
  getImages(query, page)
    .then(data => {
      totalHits = data.totalHits;
      if (data.hits.length === 0) {
        addMoreButton.classList.remove('is-viseble');
        iziToast.error({
          color: 'yellow',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        gallery.innerHTML += createGallery(data.hits);
        addMoreButton.classList.add('is-viseble');
        spinner.classList.remove('spiner-isV');
        window.scrollBy({
          top: 460,
          left: 0,
          behavior: 'smooth',
        });
      }
    })
    .catch(error => {
      gallery.innerHTML = `<p>Gallery creation failed</p>`;
    })
    .finally(() => {
      loader.remove();
      lightbox.refresh();
    });
}
let currentQuery;
let page;

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = null;
  const query = event.target.search.value.trim();
  page = 1;
  updateGallery(query, page);
  currentQuery = query;
  form.reset();
});
addMoreButton.addEventListener('click', event => {
  if (page > totalHits / 15) {
    addMoreButton.classList.remove('is-viseble');
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
      color: 'yellow',
    });
  }
  page++;
  updateGallery(currentQuery, page);
  spinner.classList.add('spiner-isV');
});

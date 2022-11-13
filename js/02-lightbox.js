import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const refs = {
  galleryEl: document.querySelector('.gallery'),
  body: document.querySelector('body'),
};

const makeGalleryItemsColection = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image lazyload" src="${preview}" alt="${description}" />
</a>`;
};
const makeColectionImage = galleryItems.map(makeGalleryItemsColection).join('');

refs.galleryEl.insertAdjacentHTML('beforeend', makeColectionImage);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

const lazyImages = document.querySelectorAll('.lazyload');
lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  evt.target.classList.add('appear');
}

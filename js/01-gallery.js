import { galleryItems } from './gallery-items.js';

const refs = {
  galleryEl: document.querySelector('.gallery'),
  body: document.querySelector('body'),
  //   imagEl: document.querySelector('gallery__link'),
};

const makeGalleryItemsColection = ({ preview, original, description }) => {
  return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img 
	class="gallery__image lazyload"
	data-src="${preview}"
	data-source="${original}"
	alt="${description}"
  />
</a>
</div>`;
};

const makeColectionImage = galleryItems.map(makeGalleryItemsColection).join('');

refs.galleryEl.insertAdjacentHTML('beforeend', makeColectionImage);
refs.body.addEventListener('click', onOpenColectionClick);

function onOpenColectionClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  window.instance = basicLightbox.create(`
<img src="${evt.target.dataset.source}">
`);
  instance.show();
}

const lazyImages = document.querySelectorAll('.lazyload');
lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  evt.target.classList.add('appear');
}

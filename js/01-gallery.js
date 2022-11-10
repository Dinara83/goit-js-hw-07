import { galleryItems } from './gallery-items.js';

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

const makeGalleryItemsColection = ({ preview, original, description }) => {
  return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
	class="gallery__image"
	src="${preview}"
	data-source="${original}"
	alt="${description}"
  />
</a>
</div>`;
};

const makeColectionImage = galleryItems.map(makeGalleryItemsColection).join('');
refs.galleryEl.insertAdjacentHTML('beforeend', makeColectionImage);
const imagEl = document.querySelector('.gallery__image');
console.log(imagEl);

imagEl.addEventListener('click', onImageInColection);

function onImageInColection(evt) {
  console.log();
}

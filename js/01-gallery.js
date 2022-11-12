import { galleryItems } from './gallery-items.js';

const refs = {
  galleryEl: document.querySelector('.gallery'),
  body: document.querySelector('body'),
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
refs.body.addEventListener('click', onOpenGalleryColection);

function onOpenGalleryColection(evt) {
  evt.preventDefault();
  const isGalleryImage = evt.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
  }
  window.instance = basicLightbox.create(
    `
	  <img src="${evt.target.dataset.source}">
	  `,
  );
  instance.show();
}

// function modalWindowShow(evt) {
//   {
// onShow: () => {
//   window.addEventListener('keydown', onEscKeydown);
// };

//     onClose: () => {
//       window.removeEventListener('keydown', onEscKeydown);
//       refs.body.classList.remove('img.[data-source]');
//     };
//   }
//   instance.show();
// }
// function onEscKeydown(evt) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = evt.code === ESC_KEY_CODE;
//   if (isEscKey) {
//     onClose();
//   }
// }

const lazyImages = document.querySelectorAll('.lazyload');
lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  evt.target.classList.add('appear');
}

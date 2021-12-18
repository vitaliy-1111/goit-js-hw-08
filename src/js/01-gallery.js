// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const refs = {
  gallery: document.querySelector('.gallery'),
}

refs.gallery.addEventListener('click', onImageClick)

function onImageClick(event) {
  event.preventDefault();
  const isClickOnGalleryImage = event.target.classList.contains('gallery__image');
  if (!isClickOnGalleryImage) {
    return;
  }
}

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(item => {
  return  `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}"  />
</a>`
}).join('');
}

refs.gallery.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

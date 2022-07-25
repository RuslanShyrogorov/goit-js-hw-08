import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery')

function createMarkupGalleryItems(galleryItems) {
  return galleryItems.map(({ preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  }).join('')
}

const galleryMarkup = createMarkupGalleryItems(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 500,
  scaleImageToRatio: true,
});
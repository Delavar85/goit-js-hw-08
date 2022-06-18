import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/01-gallery.css'
import '../css/common.css'
const galleryBlock = document.querySelector('.gallery');
const marcupGallery = createMarcupGallery(galleryItems);
function createMarcupGallery(items) {
    return items.map(({preview,original,description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('')
};
galleryBlock.innerHTML = marcupGallery;
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionType: 'alt',
    captionDelay: 250,
 });


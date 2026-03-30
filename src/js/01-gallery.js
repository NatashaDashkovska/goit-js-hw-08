// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

let galleryMarkup = galleryItems.map(({ description, original, preview }) => {
  return `<li class="gallery__item">
     <a class="gallery__link" href=${original}>
        <img class="gallery__image" src=${preview} alt="${description}" />
     </a>
  </li>`;
});

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

let gallery = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});


console.log(galleryItems);

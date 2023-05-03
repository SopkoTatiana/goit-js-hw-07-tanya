import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const imageMarkup = creatImageGallery(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imageMarkup);
imageContainer.addEventListener('click', onContainerClick);

function creatImageGallery(items)  {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join('');
};

function onContainerClick(evt) { 
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) { 
        return;
    };

    openModalWithLightbox();
};

function openModalWithLightbox() {
     new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });
};

// console.log(galleryItems);



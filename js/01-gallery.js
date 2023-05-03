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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
};

function onContainerClick(evt) { 
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) { 
        return;
    };
    
    // const linkOriginalImage = evt.target.dataset.source;
    // console.log(linkOriginalImage);
    
    // basicLightbox.create(`
	// 	<img src="${linkOriginalImage}">
	// `).show();
    // })
    
    openModal(evt);
    // onCloseKeyPressEsc(evt);

};

function openModal(evt) {
    basicLightbox.create(`
		<img src="${evt.target.dataset.source}">
	`).show();
}
//     onCloseKeyPressEsc(evt);
// }

// function onCloseKeyPressEsc(evt) {
//     console.log(evt.code);

//     if (evt.code === 'Escape') {

//         basicLightbox.close(evt);
//     };
    
// }

// console.log(galleryItems);

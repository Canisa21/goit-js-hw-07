import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = galleryItems.map(
  (galleryItem) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}"
        data-source="${galleryItem.original}"
        >
        </img>
        </a>
     </li>`
).join("");

gallery.insertAdjacentHTML("beforeend", createGallery);
console.log(galleryItems);


gallery.onclick = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  function onEscape(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }

  const instance = basicLightbox.create(
    `
		<img width="1200" src= ${event.target.dataset.source}>
	`,
    {
      onShow: () => window.addEventListener("keydown", onEscape),
      onClose: () => window.removeEventListener("keydown", onEscape),
    }
  );
  instance.show();
};

console.log(galleryItems);

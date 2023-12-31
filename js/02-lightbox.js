import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}" alt="${description}"
        /> 
        </a>
    </li>`
  )
  .join("");

container.insertAdjacentHTML("beforeend", markup);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

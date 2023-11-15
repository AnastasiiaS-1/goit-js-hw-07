import { galleryItems } from "./gallery-items.js";

const container = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}"  data-source="${original}" alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", onClick);

function onClick(evt) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const imgSource = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imgSource}" width="480" height="auto">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

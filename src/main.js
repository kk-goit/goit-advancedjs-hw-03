// import needed libs
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// import own main styles
import "./css/styles.css";

import { searchPhotos } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";


const sLightBox = new SimpleLightbox(
    '.gallery a',
    {
      overlayOpacity: 0.8,
      className: 'gallery-wrapper',
      captionsData: 'alt',
      captionDelay: 250
    }
);
iziToast.settings({
    class: "toast",
    position: "topRight",
    drag: false,
});

const theLoader = document.getElementById("modal");
const theGallery = document.querySelector('.gallery');

document.getElementById("search-form").addEventListener("submit", e => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryStr = form.elements.queryStr.value.trim();

    theLoader.classList.add("is-open");
    theGallery.innerHTML = '';
    searchPhotos(queryStr)
        .then(data => {
            if (data.total == 0) {
                iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!" });
            } else { 
                theGallery.innerHTML = createGallery(data.hits);
                sLightBox.refresh();
            }
        })
        .catch(err => {
            iziToast.error({message: err.message});
         })
        .finally(() => {
            theLoader.classList.remove("is-open");
            form.reset()
        });
 });
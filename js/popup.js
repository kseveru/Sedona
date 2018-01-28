var searchLink = document.querySelector(".search__link");
var searchPopup = document.querySelector(".search__form");

if (searchLink && searchPopup) {

  searchLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("popup-close");
  });

}

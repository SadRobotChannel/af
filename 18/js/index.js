(function() {
  var popup = document.querySelector(".popup"),
    closeBtn = document.querySelector(".popup-btn-close");

  var isClosed;

  if (sessionStorage.getItem("popup")) {
    popup.classList.remove("is-showing");
    isClosed = true;
  } else {
    popup.classList.add("is-showing");
    isClosed = false;
  }

  function openPopup(e) {
    e.preventDefault();
    e.stopPropagation();

    if (isClosed) {
      popup.classList.add("is-showing");
      popup.classList.add("is-animating");
      sessionStorage.removeItem("popup");
      isClosed = false;
    }
  }

  function closePopup(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!isClosed) {
      popup.classList.remove("is-showing");
      popup.classList.add("is-animating");
      sessionStorage.setItem("popup", "hide");
      isClosed = true;
    }
  }

  closeBtn.addEventListener("click", closePopup);
  popup.addEventListener("click", openPopup);
})();
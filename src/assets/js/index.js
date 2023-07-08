function initModal() {
  const openModal = document.querySelector("#open-modal");
  const closeModal = document.querySelector("#close-modal");
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");

  const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };

  [openModal, closeModal, fade].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
  });
}

function init() {
  initModal();
}
init();

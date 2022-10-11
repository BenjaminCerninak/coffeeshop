const btnContact = document.querySelector(".btn-contact");
const contacts = document.querySelector(".contacts");
const btnClose = document.querySelector(".button-close");
const overlay = document.querySelector(".overlay");

btnContact.addEventListener("click", function (e) {
  e.preventDefault();

  contacts.classList.add("visible");
  btnClose.classList.add("visible");
  overlay.classList.remove("hidden");
  // body.classList.add("active");
});

btnClose.addEventListener("click", function () {
  contacts.classList.remove("visible");
  btnClose.classList.remove("visible");
  overlay.classList.add("hidden");
});

if (overlay.classList.contains("hidden")) {
  overlay.addEventListener("click", function () {
    contacts.classList.remove("visible");
    btnClose.classList.remove("visible");
    overlay.classList.add("hidden");
  });
}

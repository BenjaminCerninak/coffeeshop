"use strict";
const btnNavContacts = document.querySelector(".btn-contact");
const btnNavMenu = document.querySelector(".btn-menu");
const btnCloseContacts = document.querySelector(".btn-close-contacts");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const contactsWindow = document.querySelector(".contacts");
const menuWindow = document.querySelector(".menu");

btnNavContacts.addEventListener("click", function () {
  if (menuWindow.classList.contains("hidden")) {
    contactsWindow.classList.remove("hidden");
    btnCloseContacts.classList.remove("hidden");
  } else {
    menuWindow.classList.add("hidden");
    btnCloseMenu.classList.add("hidden");
    contactsWindow.classList.remove("hidden");
    btnCloseContacts.classList.remove("hidden");
  }
});

btnCloseContacts.addEventListener("click", function () {
  contactsWindow.classList.add("hidden");
  btnCloseContacts.classList.add("hidden");
});

btnNavMenu.addEventListener("click", function () {
  if (contactsWindow.classList.contains("hidden")) {
    menuWindow.classList.remove("hidden");
    btnCloseMenu.classList.remove("hidden");
  } else {
    contactsWindow.classList.add("hidden");
    btnCloseContacts.classList.add("hidden");
    menuWindow.classList.remove("hidden");
    btnCloseMenu.classList.remove("hidden");
  }
});

btnCloseMenu.addEventListener("click", function () {
  menuWindow.classList.add("hidden");
  btnCloseMenu.classList.add("hidden");
});

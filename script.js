"use strict";
const btnNavContacts = document.querySelector(".btn-contact");
const btnNavMenu = document.querySelector(".btn-menu");
const btnCloseContacts = document.querySelector(".btn-close-contacts");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const contactsWindow = document.querySelector(".contacts");
const menuWindow = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

// nav bar contacts button
btnNavContacts.addEventListener("click", function () {
  if (menuWindow.classList.contains("hidden")) {
    contactsWindow.classList.remove("hidden");
    btnCloseContacts.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    menuWindow.classList.add("hidden");
    btnCloseMenu.classList.add("hidden");
    contactsWindow.classList.remove("hidden");
    btnCloseContacts.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
});
// contacts modal window closing button
btnCloseContacts.addEventListener("click", function () {
  contactsWindow.classList.add("hidden");
  btnCloseContacts.classList.add("hidden");
  overlay.classList.add("hidden");
});

// nav bar menu button
btnNavMenu.addEventListener("click", function () {
  if (contactsWindow.classList.contains("hidden")) {
    menuWindow.classList.remove("hidden");
    btnCloseMenu.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    contactsWindow.classList.add("hidden");
    btnCloseContacts.classList.add("hidden");
    menuWindow.classList.remove("hidden");
    btnCloseMenu.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
});
// menu modal window closing button
btnCloseMenu.addEventListener("click", function () {
  menuWindow.classList.add("hidden");
  btnCloseMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

// close modal window by clicking the overlay
overlay.addEventListener("click", function () {
  if (!overlay.classList.contains("hidden")) {
    overlay.classList.add("hidden");
    menuWindow.className = " menu hidden";
    contactsWindow.className = " contacts hidden";
    btnCloseMenu.className = "btn btn-close-menu hidden";
    btnCloseContacts.className = "btn btn-close-contacts hidden";
  }
});

"use strict";
const btnNavContacts = document.querySelector(".btn-contact");
const btnNavMenu = document.querySelector(".btn-menu");
const btnCloseContacts = document.querySelector(".btn-close-contacts");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const contactsWindow = document.querySelector(".contacts");
const menuWindow = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

// add class hidden function
const addClassHidden = function (input) {
  return input.classList.add("hidden");
};

// remove class hidden function
const removeClassHidden = function (input) {
  return input.classList.remove("hidden");
};

// return true if contains class hidden
const containsClassHidden = function (input) {
  input.classList.contains("hidden");
};

// nav bar contacts button
btnNavContacts.addEventListener("click", function () {
  if (containsClassHidden(menuWindow)) {
    // show modale window
    removeClassHidden(contactsWindow);
    removeClassHidden(btnCloseContacts);
    removeClassHidden(overlay);
  } else {
    addClassHidden(menuWindow);
    addClassHidden(btnCloseMenu);
    removeClassHidden(contactsWindow);
    removeClassHidden(btnCloseContacts);
    removeClassHidden(overlay);
  }
});
// contacts modal window closing button
btnCloseContacts.addEventListener("click", function () {
  addClassHidden(contactsWindow);
  addClassHidden(btnCloseContacts);
  addClassHidden(overlay);
});

// nav bar menu button
btnNavMenu.addEventListener("click", function () {
  if (containsClassHidden(contactsWindow)) {
    removeClassHidden(menuWindow);
    removeClassHidden(btnCloseMenu);
    removeClassHidden(overlay);
  } else {
    addClassHidden(contactsWindow);
    addClassHidden(btnCloseContacts);
    removeClassHidden(menuWindow);
    removeClassHidden(btnCloseMenu);
    removeClassHidden(overlay);
  }
});
// menu modal window closing button
btnCloseMenu.addEventListener("click", function () {
  addClassHidden(menuWindow);
  addClassHidden(btnCloseMenu);
  addClassHidden(overlay);
});

// close modal window by clicking the overlay
overlay.addEventListener("click", function () {
  if (!containsClassHidden(overlay)) {
    addClassHidden(overlay);
    menuWindow.className = " menu hidden";
    contactsWindow.className = " contacts hidden";
    btnCloseMenu.className = "btn btn-close-menu hidden";
    btnCloseContacts.className = "btn btn-close-contacts hidden";
  }
});

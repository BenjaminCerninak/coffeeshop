"use strict";
const btnNavContacts = document.querySelector(".btn-contact");
const btnNavMenu = document.querySelector(".btn-menu");
const btnCloseContacts = document.querySelector(".btn-close-contacts");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const contactsWindow = document.querySelector(".contacts");
const menuWindow = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

//function add class hidden
const addClassHidden = function (input) {
  return input.classList.add("hidden");
};

//function remove class hidden
const removeClassHidden = function (input) {
  return input.classList.remove("hidden");
};

//function return true if contains class hidden
const containsClassHidden = function (input) {
  input.classList.contains("hidden");
};
// contacts array
const contactsArr = [contactsWindow, btnCloseContacts, overlay];

// menu array
const menuArr = [menuWindow, btnCloseMenu, overlay];

//function hide modale window

const hideModaleWindow = function (inputArr) {
  inputArr.forEach((element) => {
    addClassHidden(element);
  });
};

//function show modale window
const showModaleWIndow = function (inputArr) {
  inputArr.forEach((element) => {
    removeClassHidden(element);
  });
};

// nav bar contacts button
btnNavContacts.addEventListener("click", function (e) {
  e.preventDefault();
  // show contacts modale window
  showModaleWIndow(contactsArr);
});
// contacts modal window closing button
btnCloseContacts.addEventListener("click", function () {
  hideModaleWindow(contactsArr);
});

// nav bar menu button
btnNavMenu.addEventListener("click", function (e) {
  e.preventDefault();
  // show menu modale window
  showModaleWIndow(menuArr);
});
// menu modal window closing button
btnCloseMenu.addEventListener("click", function () {
  // hide menu modale window
  hideModaleWindow(menuArr);
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

"use strict";
////////////////////////////////////////////
// Imports
import {
  TITLE_SLIDES_NUM,
  TITLE_STARTING_SLIDE,
  TITLE_SLIDESHOW_TIME,
} from "./config.js";

////////////////////////////////////////////
// Elements
const title = document.querySelector(`.section-title`);
const slides = title.querySelectorAll(`.title-slide`);

////////////////////////////////////////////
// Global Variables
let curSlideNum = TITLE_STARTING_SLIDE;

////////////////////////////////////////////
// Functions
/**
 * Changes the slide being displayed to a new slide. Slideshow will move in standard or reverse numerical order depending on the provided input.
 * @param {Boolean} [incrementUp=true] - Variable that controls the direction of the slide progression. If the value is true, the slides will progress in numerical order until the last slide is reached, at which point the slides will restart at the lowest number.
 */
const changeSlide = function (incrementUp = true) {
  // Controls number increment direction. If incrementDirection = 1 (incrementUp = false), slides will go in reverse numerical order.
  const incrementDirection = Number(!incrementUp);

  const newSlideNum =
    ((curSlideNum + incrementDirection) % TITLE_SLIDES_NUM) + 1;

  slides.forEach((slide) => {
    showAndHideSlide(slide, curSlideNum, newSlideNum);
    return;
  });
  curSlideNum = newSlideNum;
  slideTimer = setSlideTimer();
};

/**
 * Adds and removes required attributes/classes in order to show and hide the appropriate slides.
 * @param {Element} slide - The element whose state will be adjusted (shown, hidden, or ignored).
 * @param {Number} curNum - The current slide number. Element will be hidden if it's data-slide attribute is equal to this number.
 * @param {Number} newNum - The new slide number. Element will be shown if it's data-slide attribute is equal to this number.
 */
const showAndHideSlide = function (slide, curNum, newNum) {
  if (Number(slide.dataset.slide) === newNum) {
    slide.classList.remove(`js--title-hidden`);
  }
  if (Number(slide.dataset.slide) === curNum) {
    slide.classList.add(`js--title-hidden`);
  }
};

/**
 * Sets the slideshow timer.
 * @returns {Number} - ID of the timer generated by the function.
 */
const setSlideTimer = function () {
  return setTimeout(changeSlide, TITLE_SLIDESHOW_TIME);
};

// Event Listeners
title.addEventListener(`click`, function (e) {
  const targetIsLeft = e.target.classList.contains(`js--btn-title-left`);
  const targetIsRight = e.target.classList.contains(`js--btn-title-right`);

  // Guard Clause. Action only occurs if one of the buttons are clicked.
  if (!targetIsLeft && !targetIsRight) return;

  clearTimeout(slideTimer);
  changeSlide(targetIsRight);
});

////////////////////////////////////////////
// Initialize
let slideTimer = setSlideTimer();

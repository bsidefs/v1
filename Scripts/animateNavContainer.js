/**
 * This script handles all navigation container animations, including:
 *  1. hide on scroll down
 *  2. show on scroll up
 *  3. box-shadow effects
 */
$(function() {
  var navigationContainer = $(".navigation-container");
  // set the initial current position
  var currentPos = 0;
  $(window).scroll(function() {
    // obtain the new pos, check against the old current, and then update the current. repeat.
    let newPos = $(this).scrollTop();
    // check if user scrolled down
    if (newPos > currentPos) {
      navigationContainer.addClass("hidden")
      navigationContainer.removeClass("shown");
    }
    // check if user scrolled up
    else if (newPos < currentPos) {
      navigationContainer.addClass("shown");
      navigationContainer.removeClass("hidden");
    }
    // check if user is at the top of the window
    if (newPos == 0) {
      navigationContainer.removeClass("shown");
      navigationContainer.removeClass("hidden");
    }
    // update.
    currentPos = newPos;
  })
});
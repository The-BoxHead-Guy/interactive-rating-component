let rating = 0;

document.addEventListener("DOMContentLoaded", () => {
  const ratingButtons = document.querySelectorAll(".rating__button");
  const submit = document.querySelector(".submit");
  const ratingCardLayout = document.querySelector(".rating-card__layout");
  const ratingCardGratitude = document.querySelector(".rating-card__gratitude");

  /* After clicking an option it'll be selected */
  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      /* Change the rating in order to display it on the screen */
      rating = button.textContent;
      return rating;
    });
  });

  /* After clicking the submit button the rating message will be displayed */
  submitRating(submit, ratingCardLayout, ratingCardGratitude);
});

/* This function will display the rating message after clicking the submit button */
const submitRating = (submitEvent, ratingCardLayout, ratingCardGratitude) => {
  const ratingResult = document.querySelector(".rating__result");

  submitEvent.addEventListener("click", () => {
    ratingCardLayout.setAttribute("id", "hidden");
    ratingCardGratitude.removeAttribute("id");
    ratingResult.textContent = rating;
  });
};

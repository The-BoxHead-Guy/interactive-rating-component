let rating = 0;

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector(".submit");
  const ratingCardLayout = document.querySelector(".rating-card__layout");
  const ratingCardGratitude = document.querySelector(".rating-card__gratitude");
  const ratingButtons = document.querySelectorAll(".rating__button");

  /* After clicking an option it'll be selected */
  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      /* Change the rating in order to display it on the screen */
      rating = button.textContent;
      return rating;
    });
  });

  /* After clicking the submit button the rating message will be displayed */

  submitRating(submit, ratingCardLayout, ratingCardGratitude, ratingButtons);
});

/* This function will display the rating message after clicking the submit button */
const submitRating = (
  submitEvent,
  ratingCardLayout,
  ratingCardGratitude,
  buttons
) => {
  const ratingResult = document.querySelector(".rating__result");
  const ratingButtons = buttons;

  submitEvent.addEventListener("click", () => {
    const error = document.querySelector(".error");

    if (rating === 0) {
      error.innerHTML = "Please select a rating";
      error.style.display = "inline-block";
      highlightRating(buttons);

      setTimeout(() => {
        error.style.opacity = "1";
      }, 100);

      // Hides the error after 3 seconds
      setTimeout(() => {
        error.style.opacity = "0";
      }, 3000);

      return false;
    } else {
      ratingCardLayout.setAttribute("id", "hidden");
      ratingCardGratitude.removeAttribute("id");
      ratingResult.textContent = rating;

      //? In case of a new rating it'll reload the page
      /* setTimeout(() => {
        window.location.reload();
      }, 5000); */
    }

    if (rating !== 0) {
      error.style.display = "none";
    }
  });
};

/* This functin will highlight the rating buttons */
const highlightRating = (ratingButtons) => {
  const highlightColor = "var(--slate-blue-darker)";

  ratingButtons.forEach((button) => {
    button.style.backgroundColor = highlightColor;
    button.style.color = "var(--orange)";

    setTimeout(() => {
      button.style.backgroundColor = "";
      button.style.color = "";
    }, 300);
  });

  console.log(ratingButtons);
};

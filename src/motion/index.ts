import { animate } from "motion";

const header = document.querySelector("h1");
if (header) {
  animate(
    header,
    {
      opacity: 1,
      transform: "none",
    },
    {
      delay: 0.5,
      duration: 0.75,
      easing: [0.05, 0.7, 0.1, 1.0],
    }
  );
}

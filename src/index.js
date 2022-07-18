import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

setTimeout(() => {
  // variable of top to flip action
  let secondsTop = document.querySelector(".seconds .top");
  let minutesTop = document.querySelector(".minutes .top");
  let hoursTop = document.querySelector(".hours .top");
  let daysTop = document.querySelector(".days .top");

  // variable of seconds section
  let secondsTopBackOnes = document.querySelector(".seconds .top .back .ones");
  let secondsTopBackTens = document.querySelector(".seconds .top .back .tens");
  let secondsBottomBackOnes = document.querySelector(
    ".seconds .bottom .back .ones"
  );
  let secondsBottomBackTens = document.querySelector(
    ".seconds .bottom .back .tens"
  );

  // variable of minutes section
  let miuntesTopBackOnes = document.querySelector(".minutes .top .back .ones");
  let miuntesTopBackTens = document.querySelector(".minutes .top .back .tens");
  let miuntesBottomBackOnes = document.querySelector(
    ".minutes .bottom .back .ones"
  );
  let miuntesBottomBackTens = document.querySelector(
    ".minutes .bottom .back .tens"
  );

  // variable of hours section
  let hoursTopBackOnes = document.querySelector(".hours .top .back .ones");
  let hoursTopBackTens = document.querySelector(".hours .top .back .tens");
  let hoursBottomBackOnes = document.querySelector(
    ".hours .bottom .back .ones"
  );
  let hoursBottomBackTens = document.querySelector(
    ".hours .bottom .back .tens"
  );

  // variable of days section
  let daysTopBackOnes = document.querySelector(".days .top .back .ones");
  let daysTopBackTens = document.querySelector(".days .top .back .tens");
  let daysBottomBackOnes = document.querySelector(".days .bottom .back .ones");
  let daysBottomBackTens = document.querySelector(".days .bottom .back .tens");

  var interval = setInterval(() => {
    secondsTopBackOnes.innerHTML = parseInt(secondsTopBackOnes.innerHTML) - 1;
    secondsBottomBackOnes.innerHTML =
      parseInt(secondsBottomBackOnes.innerHTML) - 1;

    flip(secondsTop);
    if (
      secondsTopBackOnes.innerHTML === "-1" &&
      secondsBottomBackOnes.innerHTML === "-1"
    ) {
      secondsTopBackOnes.innerHTML = 9;
      secondsBottomBackOnes.innerHTML = 9;

      secondsBottomBackTens.innerHTML =
        parseInt(secondsBottomBackTens.innerHTML) - 1;
      secondsTopBackTens.innerHTML = parseInt(secondsTopBackTens.innerHTML) - 1;

      if (
        secondsBottomBackTens.innerHTML === "-1" &&
        secondsTopBackTens.innerHTML === "-1"
      ) {
        secondsBottomBackTens.innerHTML = 5;
        secondsTopBackTens.innerHTML = 5;

        flip(minutesTop);

        miuntesTopBackOnes.innerHTML =
          parseInt(miuntesTopBackOnes.innerHTML) - 1;
        miuntesBottomBackOnes.innerHTML =
          parseInt(miuntesBottomBackOnes.innerHTML) - 1;

        if (
          miuntesTopBackOnes.innerHTML === "-1" &&
          miuntesBottomBackOnes.innerHTML === "-1"
        ) {
          miuntesTopBackOnes.innerHTML = 9;
          miuntesBottomBackOnes.innerHTML = 9;

          miuntesBottomBackTens.innerHTML =
            parseInt(miuntesBottomBackTens.innerHTML) - 1;
          miuntesTopBackTens.innerHTML =
            parseInt(miuntesTopBackTens.innerHTML) - 1;

          if (
            miuntesBottomBackTens.innerHTML === "-1" &&
            miuntesTopBackTens.innerHTML === "-1"
          ) {
            miuntesBottomBackTens.innerHTML = 5;
            miuntesTopBackTens.innerHTML = 5;

            flip(hoursTop);

            hoursTopBackOnes.innerHTML =
              parseInt(hoursTopBackOnes.innerHTML) - 1;
            hoursBottomBackOnes.innerHTML =
              parseInt(hoursBottomBackOnes.innerHTML) - 1;

            if (
              hoursTopBackOnes.innerHTML === "-1" &&
              hoursBottomBackOnes.innerHTML === "-1"
            ) {
              hoursTopBackOnes.innerHTML = 9;
              hoursBottomBackOnes.innerHTML = 9;

              hoursBottomBackTens.innerHTML =
                parseInt(hoursBottomBackTens.innerHTML) - 1;
              hoursTopBackTens.innerHTML =
                parseInt(hoursTopBackTens.innerHTML) - 1;

              if (
                hoursBottomBackTens.innerHTML === "-1" &&
                hoursTopBackTens.innerHTML === "-1"
              ) {
                hoursTopBackOnes.innerHTML = 3;
                hoursBottomBackOnes.innerHTML = 3;
                hoursBottomBackTens.innerHTML = 2;
                hoursTopBackTens.innerHTML = 2;

                flip(daysTop);

                daysTopBackOnes.innerHTML =
                  parseInt(daysTopBackOnes.innerHTML) - 1;
                daysBottomBackOnes.innerHTML =
                  parseInt(daysBottomBackOnes.innerHTML) - 1;

                if (
                  daysTopBackOnes.innerHTML === "-1" &&
                  daysBottomBackOnes.innerHTML === "-1"
                ) {
                  daysTopBackOnes.innerHTML = 9;
                  daysBottomBackOnes.innerHTML = 9;

                  daysBottomBackTens.innerHTML =
                    parseInt(daysBottomBackTens.innerHTML) - 1;
                  daysTopBackTens.innerHTML =
                    parseInt(daysTopBackTens.innerHTML) - 1;
                }
              }
            }
          }
        }
      }
    }

    if (
      daysBottomBackOnes.innerHTML === "0" &&
      daysTopBackOnes.innerHTML === "0" &&
      hoursTopBackOnes.innerHTML === "0" &&
      hoursTopBackOnes.innerHTML === "0" &&
      miuntesTopBackOnes.innerHTML === "0" &&
      miuntesBottomBackOnes.innerHTML === "0" &&
      secondsTopBackOnes.innerHTML === "0" &&
      secondsBottomBackOnes.innerHTML === "0" &&
      daysBottomBackTens.innerHTML === "0" &&
      daysTopBackTens.innerHTML === "0" &&
      hoursTopBackTens.innerHTML === "0" &&
      hoursTopBackTens.innerHTML === "0" &&
      miuntesTopBackTens.innerHTML === "0" &&
      miuntesBottomBackTens.innerHTML === "0" &&
      secondsTopBackTens.innerHTML === "0" &&
      secondsBottomBackTens.innerHTML === "0"
    ) {
      console.log("one");
      clearInterval(interval);
    }
  }, 1000);
}, 0);

function flip(ele) {
  ele.classList.add("flip");
  ele.addEventListener("animationend", () => {
    ele.classList.remove("flip");
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

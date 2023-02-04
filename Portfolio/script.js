function aboutMe() {
  let scroll = document.getElementById("about");
  scroll.scrollIntoView({
    behavior: "smooth",
  });
}
function myRight() {
  let scroll = document.getElementById("portfolio");
  scroll.scrollIntoView({
    behavior: "smooth",
  });
}
function aboutMe() {
  window.location.hash = "#about";
}
function seeMe() {
  window.location.href = "#portfolio";
}
function contactMe() {
  window.location.href = "#contact";
}

/* PHOTOSHOP*/

let circularProgress1 = document.querySelector(".circular-progress1");
let progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,
  progressEndValue1 = 35,
  speed1 = 150;

let progress1 = setInterval(() => {
  progressStartValue1++;

  progressValue1.textContent = `${progressStartValue1}%`;
  circularProgress1.style.background = `conic-gradient(var(--purple) ${
    progressStartValue1 * 3.6
  }deg, var(--orange) 0deg)`;

  if (progressStartValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

/* BASKETBALL*/

let circularProgress2 = document.querySelector(".circular-progress2");
let progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,
  progressEndValue2 = 99,
  speed2 = 150;

let progress2 = setInterval(() => {
  progressStartValue2++;

  progressValue2.textContent = `${progressStartValue2}%`;
  circularProgress2.style.background = `conic-gradient(var(--purple) ${
    progressStartValue2 * 3.6
  }deg, var(--orange) 0deg)`;

  if (progressStartValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

/* ILLUSTRATOR*/

let circularProgress3 = document.querySelector(".circular-progress3");
let progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,
  progressEndValue3 = 69,
  speed3 = 150;

let progress3 = setInterval(() => {
  progressStartValue3++;

  progressValue3.textContent = `${progressStartValue3}%`;
  circularProgress3.style.background = `conic-gradient(var(--purple) ${
    progressStartValue3 * 3.6
  }deg, var(--orange) 0deg)`;

  if (progressStartValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);

/* HTML*/

let circularProgress4 = document.querySelector(".circular-progress4");
let progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,
  progressEndValue4 = 74,
  speed4 = 150;

let progress4 = setInterval(() => {
  progressStartValue4++;

  progressValue4.textContent = `${progressStartValue4}%`;
  circularProgress4.style.background = `conic-gradient(var(--purple) ${
    progressStartValue4 * 3.6
  }deg, var(--orange) 0deg)`;

  if (progressStartValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);

/* CSS*/

let circularProgress5 = document.querySelector(".circular-progress5");
let progressValue5 = document.querySelector(".progress-value5");

let progressStartValue5 = 0,
  progressEndValue5 = 69,
  speed5 = 150;

let progress5 = setInterval(() => {
  progressStartValue5++;

  progressValue5.textContent = `${progressStartValue5}%`;
  circularProgress5.style.background = `conic-gradient(var(--purple) ${
    progressStartValue5 * 3.6
  }deg, var(--orange) 0deg)`;

  if (progressStartValue5 == progressEndValue5) {
    clearInterval(progress5);
  }
}, speed5);

/* JavaScript*/

let circularProgress6 = document.querySelector(".circular-progress6");
let progressValue6 = document.querySelector(".progress-value6");

let progressStartValue6 = 0,
  progressEndValue6 = 12,
  speed6 = 500;

let progress6 = setInterval(() => {
  progressStartValue6++;

  progressValue6.textContent = `${progressStartValue6}%`;
  circularProgress6.style.background = `conic-gradient(var(--purple) ${
    progressStartValue6 * 3.6
  }deg, var(--orange) 0deg)`;

  if (progressStartValue6 == progressEndValue6) {
    clearInterval(progress6);
  }
}, speed6);

let carousel = document.querySelector(".carousel");
let cellCount = 14;
let selectedIndex = 0;
function rotateCarousel() {
  let angle = selectedIndex / cellCount * 360;
  carousel.style.transform = 'translateZ(-288px) rotateX(' + angle + 'deg)';
  let sizeBig = window.matchMedia("(min-width: 1023px)");
  if (sizeBig.matches) {
    carousel.style.transform = 'translateZ(-988px) rotateY(' + angle + 'deg)';
    console.log("big timeeee...")
  } else {
  };
  let sizeBigger = window.matchMedia("(min-width: 1600px)");
  if (sizeBigger.matches) {
    carousel.style.transform = 'translateZ(-1288px) rotateY(' + angle + 'deg)';
    console.log("bigger timee")
  } else {
  };
  let sizeBiggest = window.matchMedia("(min-width: 1920px)");
  if (sizeBiggest.matches) {
    carousel.style.transform = 'translateZ(-1788px) rotateY(' + angle + 'deg)';
    console.log("biggest timee yet")
  } else {
  };
}
let prevButton = document.querySelector(".prevButton");
prevButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
  console.log("prev");
});
let nextButton = document.querySelector(".nextButton");
nextButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
  console.log("next");
});


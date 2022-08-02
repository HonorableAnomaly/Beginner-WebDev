const button = document.querySelector("button");
const h1 = document.querySelector("h1");

// Click listener event added to button that grabs makeRandColor and changes the body background color and the h1 text
button.addEventListener("click", () => {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

// Random rgb color generator
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// EXTRA CREDIT: Trying to get the h1 text color to change to white if the background is dark. No worky so far.

// Any character that is not a word character or whitespace.
// const numFinder = /[^\w\s]/g;

// const colorSum = h1.innerText.search(numFinder);
// if (colorSum <= 100) {
//   h1.innerText.style.textDecorationColor = "white";
// }

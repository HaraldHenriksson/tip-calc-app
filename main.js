const elements = document.querySelectorAll(
  "#five, #ten, #fifteen, #twentyFive, #fifty"
);

elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    elements.forEach((otherElement) => {
      otherElement.style.backgroundColor = "";
      otherElement.style.color = "";
    });
    element.style.backgroundColor = "rgb(159, 240, 251)";
    element.style.color = "hsl(183, 100%, 15%)";
  });
});

five.addEventListener("click", (e) => {});

ten.addEventListener("click", (e) => {
  // Your logic for the 10% div click event
});

fifteen.addEventListener("click", (e) => {
  // Your logic for the 15% div click event
});

twentyFive.addEventListener("click", (e) => {
  // Your logic for the 25% div click event
});

fifty.addEventListener("click", (e) => {
  // Your logic for the 50% div click event
});

custom.addEventListener("click", (e) => {
  // Your logic for the custom div click event
});

const inputField = document.querySelector("#billInput");
const inputValue = inputField.value;

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  console.log(inputField.value);
});

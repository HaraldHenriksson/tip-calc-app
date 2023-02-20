const tipBtns = document.querySelectorAll(
  "#five, #ten, #fifteen, #twentyFive, #fifty"
);
const customTipInput = document.querySelector("#input");
const billInput = document.querySelector("#billInput");
const numPeopleInput = document.querySelector("#numInput");
const tipAmountDisplay = document.querySelector("#tipRes");
const totalDisplay = document.querySelector("#totalRes");
const resetBtn = document.querySelector("#reset");

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

// Add click event listener to all tip buttons
tipBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnValue = parseInt(btn.textContent);
    if (!isNaN(btnValue)) {
      setTipPercent(btnValue);
    } else {
      const customValue = parseInt(customTipInput.value);
      if (!isNaN(customValue)) {
        setTipPercent(customValue);
      }
    }
  });
});

// Add input event listener to custom tip input field
customTipInput.addEventListener("input", (e) => {
  const customValue = parseInt(customTipInput.value);
  if (!isNaN(customValue)) {
    setTipPercent(customValue);
  }
});

// Add input event listener to bill input field
billInput.addEventListener("input", (e) => {
  updateTipAndTotal();
});

// Add input event listener to number of people input field
numPeopleInput.addEventListener("input", (e) => {
  updateTipAndTotal();
});

// Add click event listener to reset button
resetBtn.addEventListener("click", (e) => {
  reset();
});

// Set the tip percentage and update the display
function setTipPercent(percent) {
  tipBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (percent === 0) {
    customTipInput.value = "";
  }
  tipPercent = percent;
  updateTipAndTotal();
}

// Calculate the tip and total amount, and update the display
function updateTipAndTotal() {
  const bill = parseFloat(billInput.value) || 0;
  const numPeople = parseInt(numPeopleInput.value) || 1;
  const tipAmount = (bill * tipPercent) / (100 * numPeople);
  const total = bill / numPeople + tipAmount;
  tipAmountDisplay.textContent = tipAmount.toFixed(2) + "kr";
  totalDisplay.textContent = total.toFixed(2) + "kr";
}

// Reset the app to its initial state
function reset() {
  tipPercent = 0;
  tipBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  customTipInput.value = "";
  billInput.value = "";
  numPeopleInput.value = "";
  tipAmountDisplay.textContent = "0.00kr";
  totalDisplay.textContent = "0.00kr";
}

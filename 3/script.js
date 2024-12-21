const htmlElement = document.documentElement;
const form = document.forms[0];
const inputs = form.querySelectorAll("input");
const labels = form.querySelectorAll("label");
const textarea = form.querySelector("textarea");
const select = document.querySelector("select");
const options = document.querySelectorAll("option");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const radioLabels = document.querySelectorAll('input[type="radio"] + label');
const button = form.querySelector('input[type="submit"]');

// ---------------adding heading to the form----------------

let heading = document.createElement('h1');
heading.textContent = 'Registration Form';

heading.style.color = '#4CAF50';
heading.style.textAlign = 'center';
heading.style.marginBottom = '1rem';
document.body.insertBefore(heading, form);

// ----------styling html elements----------

htmlElement.style.margin = "0";
htmlElement.style.padding = "0";
htmlElement.style.boxSizing = "border-box";
document.body.style.backgroundColor = "#E9F5E1";

// ----------styling form ----------

form.style.width = "50%";
form.style.margin = "2rem auto";
form.style.backgroundColor = "#FFFFFF";
form.style.color = "#3C763D";
form.style.padding = "3rem";
form.style.border = "2px solid #A5D6A7";
form.style.borderRadius = "8px";

// ----------styling form elements----------

labels.forEach((label) => {
  label.style.display = "block";
  label.style.marginBottom = "0.5rem";
  label.style.fontWeight = "bold";
});

inputs.forEach((input) => {
  input.style.width = "100%";
  input.style.padding = "0.5rem";
  input.style.border = "1px solid #A5D6A7";
  input.style.borderRadius = "4px";
  input.style.fontSize = "1rem";

  input.addEventListener('focus', () => {
    input.style.borderColor = '#4CAF50';
    input.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
    input.style.outline = 'none';
});
});

textarea.style.width = "100%";
textarea.style.padding = "0.5rem";
textarea.style.border = "1px solid #A5D6A7";
textarea.style.borderRadius = "4px";
textarea.style.fontSize = "1rem";
textarea.addEventListener('focus', () => {
  textarea.style.borderColor = '#4CAF50';
  textarea.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
  textarea.style.outline = 'none';
});

select.style.width = "auto";
select.style.padding = "0.5rem";
select.style.border = "1px solid #A5D6A7";
select.style.borderRadius = "4px";
select.style.fontSize = "1rem";
select.style.color = "#3C763D";
select.style.fontWeight = "bold";
select.style.backgroundColor = "#E9F5E1";


radioButtons.forEach((radio) => {
  radio.style.marginRight = "1rem";
  radio.style.fontSize = "1rem";
  radio.style.display = "inline";
  radio.style.width = "auto";
});

radioLabels.forEach((label) => {
  label.style.fontSize = "1rem";
  label.style.display = "inline";
  label.style.marginRight = "1rem";
});


button.style.width = "auto";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.border = "none";

button.style.cursor = "pointer";
button.style.padding = "0.5rem 1rem";
button.style.fontWeight = "bold";
button.style.marginTop = "1rem";

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#3C763D";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#4CAF50";
});

const newLabelTexts = [
  "Your Name:",
  "Your Email:",
  "Your Phone Number:",
  "Your Meassage:",
  "Select Your level:",
  "Pick Your Programming Language:",
];

labels.forEach((label, index) => {
  if (index < newLabelTexts.length) {
    label.textContent = newLabelTexts[index];
  }
});

const radioTexts = ["JavaScript", "ReactJS", "TypeScript"];

radioLabels.forEach((label, index) => {
  if (index < radioTexts.length) {
    label.textContent = radioTexts[index];
  }
  });

  const optionTexts = ["Beginner", "Intermediate", "Advanced"];

options.forEach((option, index) => {
  if (index < optionTexts.length) {
    option.textContent = optionTexts[index];
  }
});



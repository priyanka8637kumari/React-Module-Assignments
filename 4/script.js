const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

//Inline Event Handlers on Button 1
function showAlert() {
  alert('Button 1 clicked using Inline Event handlers!');
}

//DOM Level 0 Event Handlers on Button 2
const button2 = document.getElementById("button2");
button2.onclick = function() {
  alert('Button 2 clicked using DOM Level 0!');
};

//DOM Level 2 Event Listeners on Button 3
const button3 = document.getElementById("button3");
button3.addEventListener('click', function() {
  alert('Button 3 clicked using DOM Level 2!');
});

//Event Delegation on Button 4 and 5
buttonChildContainer.addEventListener('click', function(e){
  if(e.target.id === "button4"){
    alert("Button 4 clicked using Event Delegation");
  }
  else if(e.target.id === "button5"){
    alert("Button 5 clicked using Event Delegation");
  }

})

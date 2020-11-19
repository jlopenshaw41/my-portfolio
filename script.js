// event listener for 'Send message' (submit) button

let submitButton = document.getElementById("submit-form");

const validateForm = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    alert("Please enter a name");
  } else if (email == "") {
    alert("Please enter an email address");
  } else if (message == "") {
    alert("Please enter a message");
  } else {
    generatePopUp();
  }
};

const generatePopUp = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  alert(`Hey ${name || "there"}!

    Uh oh! I'm afraid your message isn't going to get to me, because I haven't learned how to do that bit yet...

    If you'd really like to get in touch, why not copy your message from the form and pop it in an email to me at jen@jenniferopenshaw.dev. There's even a handy email button at the bottom of the page.

    I'd love to hear from you!

    Your name: ${name}
    Your email: ${email}
    Your message: ${message}`);
};

submitButton.addEventListener("click", validateForm);

// event listener for 'Clear form' button

let clearButton = document.getElementById("clear-form");

let clearForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
};

clearButton.addEventListener("click", clearForm);

// Nav

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

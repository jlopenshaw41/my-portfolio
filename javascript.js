// event listener for 'Send message' (submit) button

let submitButton = document.getElementById('submit-form');

let generatePopUp = () => {

    let name = document.getElementById("name").value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert("Hey " + (name || "there")  + "!\n\nUh oh! I'm afraid your message isn't going to get to me, because I haven't learned how to do that bit yet...\n\nIf you'd really like to get in touch, why not copy your message and pop it in an email to me at jen@jenniferopenshaw.dev. There's even a handy email button at the bottom of the page\n\nI'd love to hear from you!\n\nYour name: " + name + "\nYour email: " + email + "\nYour message: " + message);
}

submitButton.addEventListener('click', generatePopUp);

// event listener for 'Clear form' button 

let clearButton = document.getElementById('clear-form');

let clearForm = () => {
    
    document.getElementById("name").value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}

clearButton.addEventListener('click', clearForm);
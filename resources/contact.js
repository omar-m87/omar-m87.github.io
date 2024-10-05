// Contact Form JS
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey =  "J8ADnKIP7nfgLy6kV";
const serviceID = "service_j32pbkj";
const templateID = "template_ub50q0h";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {

    // Prevent form default behavior
    e.preventDefault();

    // Change button text
    submitBtn.innerText = "Just A Moment...";

    // Get all input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    // send the email
    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {

            // Change button text
            submitBtn.innerText = "Sent";

            //Clear out all input fields
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => {

            // Console logs error
            console.log(error);

            // Change button text
            submitBtn.innerText = "Error";
        });
    });
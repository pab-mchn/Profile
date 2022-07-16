//form-modal-content and recive email

const contact = document.getElementById("contact");
const formModalContainer = document.getElementById("form-modal-container");
const btn = document.getElementById("button");
const showAlert = document.getElementById("showAlert");
showAlert.style.display = "none";

contact.addEventListener("click", () => {
  formModalContainer.style.display = "block";
});

//code for email js
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  function cleanAlert() {
    showAlert.style.display = "none";
  }

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_pomc62r";

  let contentAlert = document.createElement("span");
  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      formModalContainer.style.display = "none";
      showAlert.innerHTML = "";

      contentAlert.innerHTML = `
                <span><strong>Yay!</strong> thanks 🎉 your email was sent successfully.</span>
                `;
      showAlert.append(contentAlert);

      showAlert.style.display = "block";

      setTimeout(cleanAlert, 2000);
    },
    (err) => {
      btn.value = "Send Email";
      showAlert.innerHTML = "";

      contentAlert.innerHTML = `
                <span><strong>oh no!</strong> 😢 something happened, your mail was not sent! please try again</span>
                `;
      showAlert.append(contentAlert);

      showAlert.style.display = "block";

      setTimeout(cleanAlert, 2000);
    }
  );
});

// When the user clicks anywhere outside of the modal, close it
formModalContainer.onclick = function (event) {
  if (event.target == formModalContainer) {
    formModalContainer.style.display = "none";
  }
};

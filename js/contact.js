//form-modal-content and recive email

const contact = document.getElementById("contact");
const formModalContainer = document.getElementById("form-modal-container");
const btn = document.getElementById("button");
const showAlert = document.getElementById("showAlert");
showAlert.style.display = "none";

contact.addEventListener("click", () => {
  formModalContainer.innerHTML = "";
  formModalContainer.style.display = "block";

  const modalHeader = document.createElement("div");
  modalHeader.className = "form-modal-header";
  modalHeader.innerHTML = `
    <h3 class="modal-header-title">Contact</h3>
  `;
  formModalContainer.append(modalHeader);

  const modalbutton = document.createElement("h3");
  modalbutton.innerText = "❌";
  modalbutton.className = "modal-header-button";

  modalHeader.append(modalbutton);

  modalbutton.addEventListener("click", () => {
    formModalContainer.style.display = "none";
  });

  let formContent = document.createElement("form");
  formContent.className = "form-modal-content";
  formContent.setAttribute("id", "form");

  formContent.innerHTML = `
  <form id="form" class="form-modal-content">
        <h3>Let´s chat!</h3>
        <div class="field">
          <label for="from_name">Your Name</label>
          <input type="text" name="from_name" id="from_name" />
        </div>

        <div class="field">
          <label for="email_id">Your Email</label>
          <input type="text" name="email_id" id="email_id" placeholder="Please be sure your email is correct.." />
        </div>

        <div class="field">
          <label for="message">Your Message</label>
          <textarea
            rows="4"
            cols="35"
            name="message"
            id="message"
            class="message"
            placeholder="Here you can write whatever you want!. i will receive an email and i will get back to you soon..."
          ></textarea>
        </div>

  `;
  formModalContainer.append(formContent);

  let btn = document.createElement("input");
  btn.setAttribute("id", "button");
  btn.setAttribute("type", "submit");

  formContent.append(btn);

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
});

//code for email js

// When the user clicks anywhere outside of the modal, close it
formModalContainer.onclick = function (event) {
  if (event.target == formModalContainer) {
    formModalContainer.style.display = "none";
  }
};

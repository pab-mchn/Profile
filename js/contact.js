const btn = document.getElementById("button");
const nameValue = document.getElementById("user_name");
const emailValue = document.getElementById("user_email");
const messageValue = document.getElementById("message");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_yz24emb";
  const templateID = "template_erqv36g";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      nameValue.value = "";
      emailValue.value = "";
      messageValue.value = "";
      Swal.fire({
        icon: "success",
        title: "The email was sent",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    (err) => {
      btn.value = "Send Email";
      Swal.fire({
        icon: "error",
        text: "Something went wrong! Please try it again",
      });
    }
  );
});

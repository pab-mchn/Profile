const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_74fqxoc";
  const templateID = "template_pomc62r";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      Swal.fire({
        icon: "success",
        title: "Thanks the email was sent",
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

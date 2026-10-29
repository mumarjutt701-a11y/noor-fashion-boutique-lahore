
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const formMessage = document.getElementById("formMessage");
  const subjectField = document.getElementById("subject");

  // Read the selected service from the contact page URL.
  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get("service");

  if (selectedService && subjectField) {
    subjectField.value = "Enquiry about " + selectedService;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName =
      document.getElementById("name").value.trim();

    formMessage.textContent =
      "Thank you, " + customerName +
      "! Your demo form has been submitted successfully.";

    contactForm.reset();

    if (selectedService && subjectField) {
      subjectField.value = "Enquiry about " + selectedService;
    }
  });
}

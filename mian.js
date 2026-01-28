const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


function sendWhatsApp(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const location = document.getElementById("location").value;
  const budget = document.getElementById("budget").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "7782065299"; // 👉 your WhatsApp number (with country code)

  const text =
    `*New Contact Form Message*%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Location: ${location}%0A` +
    `Budget: ${budget}%0A` +
    `Subject: ${subject}%0A` +
    `Message: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
};
